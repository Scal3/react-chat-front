import React, { FC, ReactElement } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface EmptyLayoutProps {
  children: ReactElement;
}

const EmptyLayout: FC<EmptyLayoutProps> = ({children}) => {
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

export default EmptyLayout;