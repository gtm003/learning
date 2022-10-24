import React from 'react';
import { ROUTES } from '../../constants/routes';
import { NavItem } from '../NavItem/NavItem';
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Header_Logo} />
      <NavItem name='home' path='/' />
    </div>
  );
}
