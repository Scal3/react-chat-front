import React, { FC, ReactElement } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface AuthLayoutProps {
  children: ReactElement;
}

const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
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

export default AuthLayout;