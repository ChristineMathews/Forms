// LoginScreen.js
import React, { useState } from 'react';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Perform any login logic here if needed
    onLogin(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginScreen;
