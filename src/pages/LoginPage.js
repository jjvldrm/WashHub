import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => { 
        console.log('Username:', username);
        console.log('Password:', password);

        setLoggedIn(true);
    };

    return (
        <div className="container">
            <h2>Login Page</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Link to="/">
                    <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
                </Link>
            </form>
        </div>
    );
}
