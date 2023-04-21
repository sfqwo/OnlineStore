import React from 'react';
import Icon from '@src/assets/icons/icon.svg';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return(
    <div className={styles.header}>
      <Icon />
      <Link href="/login">Вход</Link>
    </div>
  )
}
export default Header;
