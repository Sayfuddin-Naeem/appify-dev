import React from 'react';
import logo from '../../assets/images/logo.webp';

function PageLogo({headingClass = ''}){
    return (
        <div className="flex gap-4 items-center">
            <figure>
                <img src={logo} alt="Appify logo" className="w-10 lg:w-25 h-10 lg:h-25 cursor-pointer" />
            </figure>
            <h1 className={`font-bold text-gradient text-[1.8rem] lg:text-[2.4rem] cursor-pointer ${headingClass}`}> Appify</h1>
        </div>
    );
};

export default PageLogo;