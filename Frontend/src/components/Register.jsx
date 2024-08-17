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
      setMessage('Registration successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/users/login');
      }, 2000);


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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button 
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Register
              </button>
            </div>
          </div>
        </form>
        {message && (
          <div className="mt-4 text-center">
            <p className={`text-sm ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;