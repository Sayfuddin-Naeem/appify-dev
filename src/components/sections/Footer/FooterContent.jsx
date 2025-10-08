import React from 'react';
import PageLogo from '../../shared/PageLogo';
import List from '../../shared/List';
import FA from '../../../utils/fa';

function FooterContent() {
  return (
    <div className="grid place-items-center lg:place-items-start grid-cols-1 gap-12 2xl:gap-40 lg:grid-cols-[1.5fr_repeat(4,1fr)] text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start gap-[1.6rem]">
            <PageLogo headingClass={'text-white'}></PageLogo>
            <p className="text-dark-06 text-center lg:text-justify mt-[1.6rem]">
                The Customer Support Zone (CSZ) is a modern, React-based application designed to streamline and enhance the ticket management process. Our intuitive interface allows users to effortlessly submit, track, and review the status of their support tickets.
            </p>
        </div>
        <FooterLink heading={"Company"} content={["About Us", "Mission", "Contact Sales"]}></FooterLink>

        <FooterLink heading={"Services"} content={["Products & Services", "Customer Stories", "Download Apps"]}></FooterLink>

        <FooterLink heading={"Information"} content={["Privacy Policy", "Terms & Conditions", "Join Us"]}></FooterLink>

        <SocialIcon></SocialIcon>
    </div>
  )
}

function FooterLink({heading, content}){
    return (
        <ul className="flex flex-col gap-6  mt-4">
            <h3 className="font-medium text-white text-[1.6rem] lg:text-[2rem] mb-6">{heading}</h3>
            {
                content.map((elem, indx) => {
                    return <List key={indx + 1} listName={elem} className={"text-dark-06"}></List>;
                })
            }
        </ul>
    );
}

function SocialIcon(){
    const content = [
        <CircularIcon icon={"fab/x-twitter"}></CircularIcon>,
        <CircularIcon icon={"fab/linkedin-in"}></CircularIcon>,
        <CircularIcon icon={"fab/facebook-f"}></CircularIcon>,
        <CircularIcon icon={"envelope"} email='support@csz.com'></CircularIcon>
    ];
    return (
        <ul className="flex flex-col gap-6  mt-4">
            <h3 className="font-medium text-white text-[1.6rem] lg:text-[2rem] mb-6">Social Links</h3>
            {
                content.map((elem, indx) => {
                    return <List key={indx + 1} listName={elem} className={"flex items-center gap-4"}></List>;
                })
            }
        </ul>
    );
}

function CircularIcon({icon, email = ''}){
    const text = "@CSZ — Ticket System";
    return (
        <>
          <div className="bg-white w-10 h-10 rounded-full p-4 flex justify-center items-center">
            <FA icon={icon}></FA>
          </div>
          <p className="text-dark-06">{email ? email : text}</p>
        </>
    );
}

export default FooterContent;