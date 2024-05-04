import React, { useState } from 'react';
import "./Login.css";
import Toast from './LoginToast';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);  // State to control the visibility of the toast

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Assuming the password is always wrong for demonstration
    setShowToast(true); // Show the toast when the form is submitted
  };

  // Additional handler for directly showing the toast via button click
  const handleShowToast = () => {
    setShowToast(true); // This will show the toast when the button is clicked
  };

  const handleLoginClick = () => {

    setShowToast(true);

    }

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
        <button type="button" onClick={handleShowToast}>Login1</button> {}
      </form>
      <Toast
        message="Your password is wrong"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}

export default Login;
