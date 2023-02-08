import React, { useState } from 'react';
import 'antd/dist/antd.css'; 

function Logout() {
  const handleLogout = () => {
    // Clear user data and redirect to login page
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
  return <button onClick={handleLogout}>Logout</button>;
}
function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform necessary action, such as sending login data to a server for verification
    console.log(loginData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={loginData.username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={loginData.password} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
