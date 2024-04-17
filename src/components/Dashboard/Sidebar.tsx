import React from 'react';
import styles from './Sidebar.module.css';

interface Props {
  active?: string
}

const Sidebar: React.FC<Props> = ({ active }) => {
    return (
      <div className={styles.sidebar}>
      <div className={styles.brandName}>DIAGEO</div>
      <ul className={styles.nav}>
        <li className={active === 'home' ? styles.active : ''}>Home</li>
        <li className={active === 'actual-distribution' ? styles.active : ''}>Actual distribution</li>
        <li className={active === 'distribution-cases' ? styles.active : ''}>Distribution Cases</li>
        <li className={active === 'data' ? styles.active : ''}>Data</li>
        <li className={active === 'optimization' ? styles.active : ''}>Optimization</li>
        <li className={active === 'reports' ? styles.active : ''}>Reports</li>
        <li className={active === 'viewTestData' ? styles.active : ''}>View test data</li>
        <li className={active === 'settings' ? styles.active : ''}>Settings</li>
      </ul>
    </div>
    );
  };
  
  export default Sidebar;