import React from 'react';
import Button from '../../shared/Button';
import List from '../../shared/List';

function NavMenu({className = ''}){
    return(
        <>
            <ul className={`flex gap-13 items-center ${className}`}>
              <List listName={"Home"} className={"text-dark-02 cursor-pointer"}></List>
              <List listName={"FAQ"} className={"text-dark-02 cursor-pointer"}></List>
              <List listName={"Changelog"} className={"text-dark-02 cursor-pointer"}></List>
              <List listName={"Blog"} className={"text-dark-02 cursor-pointer"}></List>
              <List listName={"Download"} className={"text-dark-02 cursor-pointer"}></List>
              <List listName={"Contact"} className={"text-dark-02 cursor-pointer"}></List>
              <Button btnName={"+ New Ticket"} className={"bg-gradient px-[1.6rem] py-[1.2rem] rounded-[0.4rem] text-white font-semibold text-[1.6rem] cursor-pointer"}></Button>
            </ul>
        </>
    );
};

export default NavMenu;