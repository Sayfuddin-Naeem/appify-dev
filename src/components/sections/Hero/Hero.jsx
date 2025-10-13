import React from 'react';
import googlePlay from '../../../assets/images/Google_Play.png';
import appStore from '../../../assets/images/App_Store.png';
import heroImg from '../../../assets/images/hero.png';

function Hero() {
  return (
    <div className='containers pt-15 lg:pt-32 flex flex-col justify-center items-center text-center'>
        <h1 className="text-dark-04 font-bold text-[5.2rem] lg:text-[7.2rem]">
            We Build <br /> <span className='text-gradient text-[5.2rem] lg:text-[7.2rem] font-black font-delius'>Productive</span> Apps
        </h1>
        <p className="text-dark-05 text-[1.8rem] lg:text-[2rem] mt-6">
            At Appify, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-4 my-16">
            <a href='https://play.google.com/store/apps' target='_blank' className="flex gap-4 justify-center items-center text-[1.6rem] lg:text-[2rem] text-dark-04 border border-gray-300 rounded-[0.4rem] px-[2.4rem] py-[1.2rem]">
                <img src={googlePlay} alt="google play logo" className='w-13 h-13' />
                Google Play
            </a>
            <a href='https://www.apple.com/app-store/' target='_blank' className="flex gap-4 justify-center items-center text-[1.6rem] lg:text-[2rem] text-dark-04 border border-gray-300 rounded-[0.4rem] px-[2.4rem] py-[1.2rem]">
                <img src={appStore} alt="app store logo" className='w-13 h-13' />
                App Store
            </a>
        </div>
        <figure className="">
            <img src={heroImg} alt="phone apps image" />
        </figure>
    </div>
  )
}

export default Hero;