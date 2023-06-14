import React, { FC } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchSvg from '@assets/icons/search.svg';
import BurgerSvg from '@assets/icons/burger.svg';
import LinkSvg from '@assets/icons/link.svg';
import AccountSvg from '@assets/icons/account.svg';
import { useModalContext } from '@src/utils/modalContext/ModalContext';
import { useMatchMediaContext } from '@src/utils/matchMediaContext/MatchMediaContext';

interface IBurger {
  handleClick: (e: any) => void
}

const Burger: FC<IBurger> = ({ handleClick }) => (
  <button onClick={handleClick}>
    <BurgerSvg />
  </button>
);

const Header = () => {
  const router = useRouter();
  const isMainPage = router.pathname === '/';
  const handleClick = (e: any) => console.log(e);

  const { mobile, tablet, large } = useMatchMediaContext();
  const isMobileMedia = mobile || tablet;

  const { handleOpen } = useModalContext();

  return (
    <div className={styles.header}>
      {isMainPage ? (
        <div className={styles.header__menu}>
          {isMobileMedia ? <Burger handleClick={handleClick} /> : (
            <div className={styles.header__menu_nav}>
              <Link href="/">Главное</Link>
              <Link href="/">Магазин</Link>
              <Link href="/">Избранное</Link>
              <Link href="/">Детям</Link>
            </div>
          )}
          <button className={styles.header__menu_login} onClick={() => handleOpen('login')}>Вход/Регистрация</button>
        </div>
      ) : (
        <div className={styles.header__content}>
          <Burger handleClick={handleClick} />
          <Link href="/" className={styles.header__content__link}>
            <LinkSvg />
            ПОДБОРКА: РЕКОМЕНДАЦИИ
          </Link>
        </div>
      )}
      <div className={styles.header__account}>
        <Link href="/">{large ? 'Профиль' : <AccountSvg />}</Link>
        <button onClick={handleClick} className={styles.header__search}>
          <SearchSvg />
        </button>
      </div>
    </div>
  );
};
export default Header;
