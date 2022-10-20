import React from 'react';
import { ROUTES } from '../../constants/routes';
import { NavItem } from '../NavItem/NavItem';
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Header_Logo} />
        {Object.values(ROUTES).map(page => <NavItem name={page.name} path={page.path} />)}
    </div>
  );
}
