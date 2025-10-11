import React, { useState } from 'react';

function NavMenu(){
    const [activeIndex, setActiveIndex] = useState(0);
    const menuItems = ["Home", "Apps", "Installation"];
    return(
        <>
            {
                menuItems.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`cursor-pointer text-dark-02 font-medium ${activeIndex === index ? "text-gradient active" : ""}`}
                    >
                        {item}
                    </li>
                ))
            }
        </>
    );
};

export default NavMenu;