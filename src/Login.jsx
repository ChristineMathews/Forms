// LoginScreen.js
import React, { useState } from 'react';
import './LoginScreen.css'; // Import the CSS file for styling

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Perform any login logic here if needed
    onLogin(username);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginScreen;

