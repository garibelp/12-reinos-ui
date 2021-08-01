import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { authHeader } from './helpers/auth-header';
import './index.css';
import store from './reducers/store';
import * as serviceWorker from './serviceWorker';

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    return {
        headers: {
            ...headers,
            Authorization: authHeader(),
        },
    };
});

const httpLink = createHttpLink({
    uri: `${
        process.env.REACT_APP_BACKEND_URI || 'http://localhost:4000'
    }/graphql`,
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <App />
                </ApolloProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
