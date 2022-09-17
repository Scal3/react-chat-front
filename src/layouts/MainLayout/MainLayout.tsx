import React, { FC, ReactElement } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface MainLayoutProps {
  children: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
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

export default MainLayout;