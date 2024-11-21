import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import Image from 'next/image';
const navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        {/* <Image src="/img/oren-logo.jpg" alt="Oren Logo" width={100} height={50} />; */
        <Image
        src="/img/oren-logo.jpg"
        alt="Oren Logo"
        className={styles.logoImage}
        width={40} // Default width when collapsed
        height={40} // Ensures proportional height
      />
        }
        <span className={styles.version}>v1.0.0</span>
      </div>
      
      <div className={styles.section}>
        <h3>CSO DEV COMPANY</h3>
        <Link href="/dashboard"><div className={styles.icon}>🏠<span> Dashboard</span></div></Link>
        <Link href="/reports"><div className={styles.icon}>📄<span> Reports</span></div></Link>
        <Link href="/scope3"><div className={styles.icon}>👥<span> Scope 3</span></div></Link>
        <Link href="/goals"><div className={styles.icon}>🎯<span> Goals</span></div></Link>
      </div>

      <div className={styles.section}>
        <h3>SUPPLY CHAIN</h3>
        <Link href="/supply-dashboard"><div className={styles.icon}>🏢<span> Dashboard</span></div></Link>
        <Link href="/assessments"><div className={styles.icon}>📊<span> Assessments</span></div></Link>
      </div>

      <div className={styles.section}>
        <h3>SETTINGS</h3>
        <Link href="/preferences"><div className={styles.icon}>⚙<span> Preferences</span></div></Link>
        <Link href="/user-management"><div className={styles.icon}>📄<span> User Management</span></div></Link>
        <Link href="/faqs"><div className={styles.icon}>❓<span> FAQs</span></div></Link>
      </div>
    </div>
  );
};

export default navbar;