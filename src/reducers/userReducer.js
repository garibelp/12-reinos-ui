import { createSlice } from '@reduxjs/toolkit';
import QueryStatusEnum from '../enums/queryStatusEnum';

const { actions, reducer } = createSlice({
    name: 'user',
    initialState: {
        signInQueryStatus: QueryStatusEnum.NOT_STARTED,
        username: null,
        token: undefined,
    },
    reducers: {
        setAuth: (state, action) => {
            const {
                payload: { queryStatus, token, username },
            } = action;
            state.signInQueryStatus = queryStatus;
            state.username = username;
            if (queryStatus === QueryStatusEnum.FINISHED) {
                state.token = token;
            }
        },
        // createUser: (state, action) => {
        //
        // }
    },
});

export const { setAuth, createUser } = actions;
export default reducer;
