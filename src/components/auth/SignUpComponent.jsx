import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../reducers/userThunk';

export function SignUpComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <h1>SignUp Form</h1>
            <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={() => dispatch(signUpAction(username, password))}>
                Crau
            </button>
        </div>
    );
}
