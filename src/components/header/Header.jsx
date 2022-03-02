import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.divHeader}>
      <div>
        <img src="https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-call-friendship-wanicon-flat-wanicon.png" />
      </div>
      <div className={styles.titleHeader}>
        <h1>TELZIR TELEPHONY</h1>
      </div>
    </div>
  );
};

export default Header;
