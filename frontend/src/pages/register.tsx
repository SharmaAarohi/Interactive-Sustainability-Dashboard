import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/register.module.css'; 
import Link from 'next/link';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    try {
      console.log('Sending registration request to API:', process.env.NEXT_PUBLIC_API_URL);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({ email, password }),
      });
    
      if (response.ok) {
        console.log('Registration successful');
        router.push('/login');
      } else {
        const errorData = await response.json();
        console.error('Registration Error Details:', errorData);
        setError(errorData.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Network/Server Error during Registration:', error);
      setError('An error occurred during registration');
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Register</h1>
        <form onSubmit={handleRegister}>
          {error && <p className={styles.error}>{error}</p>}
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
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Register</button>
        </form>
        <p>
        Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
