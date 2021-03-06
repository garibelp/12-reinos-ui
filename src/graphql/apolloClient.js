import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { fromPromise } from 'apollo-link';

import { authHeader } from '../helpers/auth-header';
import { authService } from '../service/authService';

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    return {
        headers: {
            ...headers,
            Authorization: authHeader(),
        },
    };
});

const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
        if (networkError) {
            console.error(networkError?.message);
            authService.logout();
            return;
        }
        if (graphQLErrors) {
            for (let err of graphQLErrors) {
                // handle errors differently based on its error code
                switch (err.extensions.code) {
                    case 'UNAUTHENTICATED':
                        // old token has expired throwing AuthenticationError,
                        // one way to handle is to obtain a new token and
                        // add it to the operation context
                        return fromPromise(
                            authService
                                .refresh()
                                .then((token) => {
                                    const headers = operation.getContext()
                                        .headers;
                                    operation.setContext({
                                        headers: {
                                            ...headers,
                                            authorization: authHeader(),
                                        },
                                    });

                                    // Now, pass the modified operation to the next link
                                    // in the chain. This effectively intercepts the old
                                    // failed request, and retries it with a new token
                                    return forward(operation);
                                })
                                .catch((e) => {
                                    console.error(e);
                                    authService.logout();
                                    return;
                                })
                        );
                    default:
                    // TODO: default error
                }
            }
        }
    }
);

const httpLink = createHttpLink({
    uri: `${
        process.env.REACT_APP_BACKEND_URI || 'http://localhost:4000'
    }/graphql`,
});

const client = new ApolloClient({
    link: from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
});

export default client;
