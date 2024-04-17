import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
    children: ReactNode; 
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const location = useLocation();
    const activeRoute = location.pathname.replace('/', '') || 'home';
  
    return (
      <div className={styles.appLayout}>
        <Sidebar active={activeRoute} />
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    );
};
  
export default AppLayout;
