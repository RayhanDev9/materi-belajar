import React, { useState } from 'react'
import { useAuth } from './Auth';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {

    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location.state?.from || "/";

    function handleLogin() {
        auth.login(user);
        navigate(redirect, { replace: true });
    }

    return (
        <div>Login

            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={(e) => setUser(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login