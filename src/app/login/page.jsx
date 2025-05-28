'use client';
import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      setError('');
      onLoginSuccess();
    } else {
      setError('Invalid username or password');
    }
  };

return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#212121FF'
    }}>
            <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}
            className="flex flex-col items-center justify-center p-6 bg-green-900 rounded shadow-md rounded-xl">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
                /><br/>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
                /><br/>
                <button type="submit" style={{
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>Login</button>
            </form>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        </div>      
);
}

export default Login;
