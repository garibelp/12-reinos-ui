import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import client from './graphql/apolloClient';
import './index.css';
import store from './reducers/store';
import * as serviceWorker from './serviceWorker';

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
