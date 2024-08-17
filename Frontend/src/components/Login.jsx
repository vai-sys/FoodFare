
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
     navigate('/home');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        username,
        password,
      });
      console.log('Server Response:', response);

      const token = response.data.token; 
      console.log('Token:', token);
      localStorage.setItem('token', token);
      setMessage('Login successful!');
      
      setIsLoggedIn(true);
    
    } catch (error) {
      console.error('Login Error:', error);
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
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Login to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        {message && (
          <div className="mt-4 text-center">
            <p className={`text-sm ${message.includes('Error') || message.includes('occurred') ? 'text-red-600' : 'text-green-600'}`}>
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isLoggedIn) {
//       const timer = setTimeout(() => {
//         navigate('/recipes');
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [isLoggedIn, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       const response = await axios.post('http://localhost:5000/user/login', {
//         username,
//         password
//       });
      
//       const token = response.data.token;
//       localStorage.setItem('token', token);
//       setMessage('Login successful!');
//       setIsLoggedIn(true);
//     } catch (error) {
//       if (error.response) {
//         setMessage(error.response.data.msg || 'An error occurred');
//       } else if (error.request) {
//         setMessage('No response from server. Please try again.');
//       } else {
//         setMessage('Error: ' + error.message);
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl">
//         <div>
//           <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
//             Login to your account
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="username" className="sr-only">Username</label>
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
//         {message && (
//           <div className="mt-4 text-center">
//             <p className={`text-sm ${message.includes('Error') || message.includes('occurred') ? 'text-red-600' : 'text-green-600'}`}>
//               {message}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;














// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     try {
//       const response = await axios.post('http://localhost:5000/user/login', {
//         username,
//         password
//       });
      
//       const token = response.data.token;
      
//       // Store the token in localStorage
//       localStorage.setItem('token', token);

//       setMessage('Login successful!');
      
//     } catch (error) {
//       if (error.response) {
//         setMessage(error.response.data.msg || 'An error occurred');
//       } else if (error.request) {
//         setMessage('No response from server. Please try again.');
//       } else {
//         setMessage('Error: ' + error.message);
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
//         <h3 className="text-2xl font-bold text-center">Login</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mt-4">
//             <div>
//               <label className="block" htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 id="username"
//                 className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mt-4">
//               <label className="block" htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 id="password"
//                 className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="flex items-baseline justify-between">
//               <button 
//                 type="submit"
//                 className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
//               >
//                 Login
//               </button>
//             </div>
//           </div>
//         </form>
//         {message && (
//           <div className="mt-4 text-center">
//             <p className={`text-sm ${message.includes('Error') || message.includes('occurred') ? 'text-red-500' : 'text-green-500'}`}>
//               {message}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;