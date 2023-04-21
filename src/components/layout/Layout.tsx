import React, { ReactElement } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

interface ILayout {
  children: Element | Element[] | ReactElement<any, any> | ReactElement<any, any>[]
}

const Layout = ({children}: ILayout) => {
  return(
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
export default Layout;