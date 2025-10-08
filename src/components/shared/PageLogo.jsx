import React from 'react';
import logo from '../../assets/images/logo.webp';

function PageLogo(){
    return (
        <div className="flex gap-4 items-center">
            <figure>
                <img src={logo} alt="Customer Support Zone logo" className="w-8 lg:w-15 h-10 lg:h-20 cursor-pointer" />
            </figure>
        </div>
    );
};

export default PageLogo;