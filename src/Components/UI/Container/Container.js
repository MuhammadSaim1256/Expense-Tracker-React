import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import './style.css';


const Container = ({children}) => {
  return (
    <div className='container'>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Container