import React from 'react';
import styles from '../styles/dashboard.module.css';
import Link from 'next/link';

const DashboardPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Your Dashboard</h1>
      <div className={styles.metrics}>
        <p>Your sustainability metrics will be displayed here.</p>
      </div>
      <div className={styles.navigation}>
        <Link href="/login">
          <button onClick={() => localStorage.removeItem('token')}>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
