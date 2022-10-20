import React from 'react';
import { ROUTES } from '../../constants/routes';
import './Header.css'

export const Header = () => {
  return (
    <div className='Header'>
        {Object.values(ROUTES).map(page => <a key={page.path} href={page.path}>{page.name}</a>)}
    </div>
  );
}
