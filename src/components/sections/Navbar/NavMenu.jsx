import React from 'react';
import { Link, useLocation } from 'react-router';

function NavMenu(){
    const location = useLocation();
    const menuItems = ["Home", "Apps", "Installation"];
    const routes = ['/', '/apps', '/installation'];
    
    return(
        <>
          {
            menuItems.map((item, index) => {
                const isActive = (location.pathname === routes[index]);
                return (
                  <Link key={index} to={routes[index]}>
                    <li
                        className={`cursor-pointer text-dark-02 font-medium ${isActive ? "text-gradient active" : ""}`}
                    >
                        {item}
                    </li>
                  </Link>
                );
              })
            }
        </>
    );
};

export default NavMenu;