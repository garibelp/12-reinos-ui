import { BehaviorSubject } from 'rxjs';

import { handleResponse } from '../helpers/handle-response';

const apiUri = process.env.REACT_APP_BACKEND_URI || 'http://localhost:4000';

const currentUserSubject = new BehaviorSubject(
    JSON.parse(localStorage.getItem('currentUser'))
);

export const authService = {
    login,
    logout,
    refresh,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value;
    },
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    };

    return fetch(`${apiUri}/auth/login`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

function refresh() {
    // TODO: Handle refresh
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authService.currentUserValue),
    };

    return fetch(`${apiUri}/auth/refresh`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}
