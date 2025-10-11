import React from 'react';
import { FaXTwitter, FaFacebookF, FaEnvelope, FaLinkedinIn } from 'react-icons/fa6';
import PageLogo from '../../shared/PageLogo';

function FooterContent() {
  return (
    <div className="grid place-items-center lg:place-items-start grid-cols-1 gap-12 2xl:gap-40 lg:grid-cols-[1.5fr_repeat(4,1fr)] text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start gap-[1.6rem]">
            <PageLogo></PageLogo>
            <p className="text-dark-06 text-center lg:text-justify mt-[1.6rem]">
                Appify Store is your one-stop destination for discovering, downloading, and managing high-quality mobile and web applications. Explore trending apps, track updates, and stay connected with innovative developers across the world.
            </p>
        </div>

        <FooterLink heading={"Company"} content={["About Appify", "Our Vision", "Contact Support"]}></FooterLink>

        <FooterLink heading={"Explore"} content={["Top Apps", "New Releases", "Developer Portal"]}></FooterLink>

        <FooterLink heading={"Resources"} content={["Privacy Policy", "Terms of Use", "Careers"]}></FooterLink>

        <SocialIcon></SocialIcon>
    </div>
  )
}

function FooterLink({heading, content}) {
    return (
        <ul className="flex flex-col gap-6 mt-4">
            <h3 className="font-medium text-white text-[1.6rem] lg:text-[2rem] mb-6">{heading}</h3>
            {
                content.map((elem, indx) => {
                    return <li key={indx + 1} className="text-dark-06">{elem}</li>;
                })
            }
        </ul>
    );
}

function SocialIcon() {
    const content = [
        <CircularIcon icon={<FaXTwitter />}></CircularIcon>,
        <CircularIcon icon={<FaLinkedinIn />}></CircularIcon>,
        <CircularIcon icon={<FaFacebookF />}></CircularIcon>,
        <CircularIcon icon={<FaEnvelope />} email='support@appifystore.com'></CircularIcon>
    ];
    return (
        <ul className="flex flex-col gap-6 mt-4">
            <h3 className="font-medium text-white text-[1.6rem] lg:text-[2rem] mb-6">Social Links</h3>
            {
                content.map((elem, indx) => {
                    return <li key={indx + 1} className="flex items-center gap-4">{elem}</li>;
                })
            }
        </ul>
    );
}

function CircularIcon({icon, email = ''}) {
    const text = "@AppifyStore — Discover Great Apps";
    return (
        <>
          <div className="bg-white w-12 h-12 rounded-full p-4 flex justify-center items-center">
            {icon}
          </div>
          <p className="text-dark-06">{email ? email : text}</p>
        </>
    );
}

export default FooterContent;
