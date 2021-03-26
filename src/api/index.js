import { post } from './base';

export const Authentication = {
    signIn: (username, password) =>
        post('/auth/signin', { username, password }),
    signUp: (username, password) =>
        post('/auth/signup', { username, password }),
};
