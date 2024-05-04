import React, { useState } from 'react';
import "./Login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement login logic
  };

  return (
    <div className="login-background">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
        </label>
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <br />
        <label>
          Password:
        </label>
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;