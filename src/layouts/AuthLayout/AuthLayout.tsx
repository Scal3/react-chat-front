import './AuthLayout.css';
import React, { FC, ReactElement } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface AuthLayoutProps {
  children: ReactElement;
}

const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
  return (
    <div className='auth-layout'>
      <div className='auth-layout__header'>
        <Header/>
      </div>
      <main className='auth-layout__content'>
        {children}
      </main>
      <div className='auth-layout__footer'>
        <Footer />
      </div>
    </div>
  )
}

export default AuthLayout;