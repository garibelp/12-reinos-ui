import { Authentication } from '../api';
import QueryStatusEnum from '../enums/queryStatusEnum';
import { setAuth } from './userReducer';

export const signInAction = (username = '', password = '') => (dispatch) => {
    dispatch(setAuth({ queryStatus: QueryStatusEnum.PENDING, username }));
    Authentication.signIn(username, password)
        .then((response) => {
            const { accessToken } = response;
            dispatch(
                setAuth({
                    queryStatus: QueryStatusEnum.FINISHED,
                    username,
                    token: accessToken,
                })
            );
        })
        .catch((e) => {
            console.error(e);
            dispatch(
                setAuth({ queryStatus: QueryStatusEnum.FAILED, username })
            );
        });
};
export const signUpAction = (username, password) => (dispatch) => {
    Authentication.signUp(username, password)
        .then((response) => {})
        .catch((e) => {});
};
