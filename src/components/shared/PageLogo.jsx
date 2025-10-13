import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/images/logo.webp';

function PageLogo({headingClass = ''}){
    return (
        <div className="flex gap-4 items-center">
            <Link to={'/'}>
              <figure>
                <img src={logo} alt="Appify logo" className="w-10 lg:w-25 h-10 lg:h-25 cursor-pointer" />
              </figure>
            </Link>
            <Link to={'/'}>
              <h1 className={`font-bold font-delius text-gradient text-[2.2rem] lg:text-[3.2rem] cursor-pointer ${headingClass}`}> Appify</h1>
            </Link>
        </div>
    );
};

export default PageLogo;