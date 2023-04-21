import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchSvg from '@assets/icons/search.svg';
import BurgerSvg from '@assets/icons/burger.svg';
import LinkSvg from '@assets/icons/link.svg';

const Header = () => {
  const router = useRouter();
  const handleClick = (e: any) => console.log(e)
  return (
    <div className={styles.header}>
      { router.pathname === '/' ? (
        <div className={styles.header__menu}>
        <div className={styles.header__menu_nav}>
          <Link href="/">Главное</Link>
          <Link href="/">Магазин</Link>
          <Link href="/">Избранное</Link>
          <Link href="/">Детям</Link>
        </div>
        <Link href="/login">Вход/Регистрация</Link>
      </div>
      ) : (
        <div className={styles.header__content}>
          <button onClick={handleClick}>
            <BurgerSvg />
          </button>
          <Link href='/' className={styles.header__content__link}>
          <LinkSvg />
            ПОДБОРКА: РЕКОМЕНДАЦИИ
          </Link>
        </div>
      )}
      <div className={styles.header__account}>
        <Link href="/">Профиль</Link>
        <button onClick={handleClick} className={styles.header__search}>
          <SearchSvg />
        </button>
      </div>
    </div>
  )
}
export default Header;
