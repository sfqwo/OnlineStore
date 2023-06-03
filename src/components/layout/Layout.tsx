import React, { ReactElement, ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import styles from './Layout.module.scss';

interface ILayout {
  children: Element | Element[] | ReactElement<any, any> | ReactElement<any, any>[];
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className={styles.wrap}>
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};
export default Layout;
