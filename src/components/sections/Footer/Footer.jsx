import React from 'react'
import { FaCopyright } from 'react-icons/fa';
import FooterContent from './FooterContent';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black px-12 lg:px-32 pt-12 lg:pt-32 pb-12 w-full">
        <FooterContent></FooterContent>
        <hr className="m-12 lg:mt-32 border-gray-800" />
        <div className="text-dark-07 text-center flex items-center justify-center gap-4">
            <FaCopyright />
            {year} Appify — App Store. All rights reserved.
        </div>
    </div>
  )
}

export default Footer;