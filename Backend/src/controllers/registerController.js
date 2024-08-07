import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await axios.post('http://localhost:5000/user/register', {
        username,
        password
      });
      setMessage(response.data.msg);
      // Note: The backend doesn't send a token, so we're not storing one
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.msg || 'An error occurred');
      } else if (error.request) {
        setMessage('No response from server. Please try again.');
      } else {
        setMessage('Error: ' + error.message);
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input 
            id='username'
            value={username} 
            type='text' 
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input 
            id='password'
            value={password} 
            type='password' 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;