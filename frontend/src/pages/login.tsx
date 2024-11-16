// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from '../styles/login.module.css';  
// import { login } from '../services/authServices';
// import Link from 'next/link';
// const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     try {
//       const data = await login(email, password);
//       if (data.token) {
//         console.log('Token received:', data.token);
//         // Store the token, e.g., in localStorage
        
//         localStorage.setItem('token', data.token);

//         router.push('/dashboard'); // Redirect to dashboard
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Login failed, please try again');
//     }
//   };
  

//   return (
//     <div className={styles.container}>
//       <div className={styles.formContainer}>
//         <h1 className={styles.title}>Login</h1>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             required
//             className={styles.input}
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             required
//             className={styles.input}
//           />
//           <button type="submit" className={styles.button}>Login</button>
//         </form>
//         <p>
//         Don’t have an account? <Link href="/register">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// frontend/src/pages/login.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';  
import { login } from '../services/authServices';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await login(email, password);
      if (data.token) {
        localStorage.setItem('token', data.token);
        router.push('/dashboard');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed, please try again');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h1>Welcome</h1>
        <p>Congratulations on starting your sustainability journey.</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <div className={styles.passwordField}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>Don’t have an account? <Link href="/register">Register now</Link></p>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.imageSlider}>
          {/* Replace with your image slider component */}
          <p>Image Slider Placeholder</p>
        </div>
        <div className={styles.logo}>
          <img src="/public/img/logo.png" alt="Oren Logo" />
          <a href="https://orennow.com" target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
