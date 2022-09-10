import React, { FC, ReactElement } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface LoginLayoutProps {
  children: ReactElement;
}

const LoginLayout: FC<LoginLayoutProps> = ({children}) => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default LoginLayout;