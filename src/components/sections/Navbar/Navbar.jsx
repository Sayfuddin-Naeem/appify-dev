import React from 'react';
import { FaGithub } from "react-icons/fa";
import NavMenu from './NavMenu';
import PageLogo from '../../shared/PageLogo';

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start containers my-[1.6rem]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <NavMenu></NavMenu>
          </ul>
        </div>
        <PageLogo></PageLogo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-12.5">
          <NavMenu></NavMenu>
        </ul>
      </div>
      <div className="navbar-end containers my-[1.6rem]">
        <a href='https://github.com/Sayfuddin-Naeem' target='_blank' className="btn-gradient gap-6"><FaGithub />Contribute</a>
      </div>
    </div>
  );
}


export default Navbar;