import React from 'react'
import Navbar from '../../components/sections/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/sections/Footer/Footer';

function Root() {
  return (
    <div className=''>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root;