import { configureStore } from '@reduxjs/toolkit';

import characterReducer from './characterReducer';
import userReducer from './userReducer';

export default configureStore({
    reducer: {
        user: userReducer,
        character: characterReducer,
    },
});
