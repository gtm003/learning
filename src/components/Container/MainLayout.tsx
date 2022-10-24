import React, { ReactNode } from 'react';
import styles from './MainLayout.module.scss';

interface IMainLayoutProps {
  children: ReactNode,
}

export const MainLayout = ({children}: IMainLayoutProps) => {
  return (
    <div className={styles.MainLayout}>
      {children}
    </div>
  );
}
