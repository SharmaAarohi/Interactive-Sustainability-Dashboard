import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';  
import { login } from '../services/authServices';
import Link from 'next/link';
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const data = await login(email, password);
      if (data.token) {
        console.log('Token received:', data.token);
        // Store the token, e.g., in localStorage
        
        localStorage.setItem('token', data.token);

        router.push('/dashboard'); // Redirect to dashboard
      }
    } catch (error) {
      console.error(error);
      alert('Login failed, please try again');
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className={styles.input}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Login</button>
        </form>
        <p>
        Don’t have an account? <Link href="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
