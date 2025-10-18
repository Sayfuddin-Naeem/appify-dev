import React from 'react';
import { Link, useLocation } from 'react-router';
import { MdInstallDesktop } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";


function NavMenu(){
    const location = useLocation();
    const menuItems = [
      {icon: IoHomeOutline, text: "Home", path: '/',},
      {icon: FaAppStore, text: "Apps", path: '/apps',},
      {icon: MdInstallDesktop, text: "Installation", path: '/installation',},
    ];
    
    return(
        <>
          {
            menuItems.map(({ icon: Icon, text, path }, index) => {
                const isActive = (location.pathname === path);
                return (
                  <li
                    key={index}
                    className={`flex items-center gap-2 text-[1.6rem] transition-all duration-200 hover:bg-purple-100 hover:rounded-2xl ${
                      isActive ? "text-gradient active" : "text-dark-02"
                    }`}
                  >
                    <Link to={path} className={`flex items-center gap-4 hover:bg-transparent`}>
                      <Icon
                        size={22}
                        color={isActive ? "#9F62F2" : "rgba(0, 0, 0, 0.9)"}
                      />
                      {text}
                    </Link>
                  </li>
                );
              })
            }
        </>
    );
};

export default NavMenu;