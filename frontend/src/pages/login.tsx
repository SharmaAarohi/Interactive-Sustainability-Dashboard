import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';  
import { login } from '../services/authServices';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null); // State for error message
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await login(email, password);
      if (data.token) {
        localStorage.setItem('token', data.token);
        router.push('/dashboard');
      } else {
        setError('Invalid email or password. Please try again.'); // Set error for invalid credentials
      }
    } catch (err: any) {
        // Catch server or network errors
        if (err.response?.status === 401) {
          setError('Invalid credentials. Please check your email and password.'); // 401 Unauthorized
        } else {
          setError('An unexpected error occurred. Please try again later.');
        }
      }
    };

return (
  <div className={styles.container}>
    <div className={styles.loginForm}>
      <h1>Welcome</h1>
      <p>Congratulations on starting your sustainability journey.</p>
      {error && <div className={styles.errorMessage}>{error}</div>} {/* Display error message */}
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
      <p className={styles.registerPrompt}>
        Don’t have an account? <Link href="/register">Register now</Link>
      </p>
    </div>
    <div className={styles.infoContainer}>
      <div className={styles.imageSlider}>
        <img src="/img/image1.jpg" alt="Slider Image 1" />
        {/* Use a carousel library like react-slick if needed for multiple images */}
      </div>
      <div className={styles.logo}>
        <img src="/img/oren-logo.jpg" alt="Oren Logo" />
        <p></p>
        <a href="https://orennow.com" target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </div>
    </div>
  </div>
);
};

export default LoginPage;