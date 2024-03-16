import React from 'react';
import styles from './header.module.css';
import userIcon from '../../assets/user/user-icon.svg';
import { Search } from '../search';
import logoIcon from '../../assets/logo/logo-icon.svg';
import { HeaderProps } from './types';


export const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
  return (
    <header className={styles.header}>
      <img src={logoIcon} alt='Logo' className={styles.logoIcon} />
      <div className={styles.headerCenter}>
        <Search handleSearch={handleSearch} />
      </div>
      <div className={styles.headerRight}>
        <img src={userIcon} alt='User Icon' className={styles.userIcon} />
        <span className={styles.userName}>Your Name</span>
      </div>
    </header>
  );
};

