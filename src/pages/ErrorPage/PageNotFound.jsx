import React from 'react';
import { Link } from 'react-router';
import errorImg from '../../assets/images/error-404.png';

function PageNotFound() {
  return (
    <div className='px-20 py-15 w-full h-[100vh] flex flex-col justify-center items-center gap-10 bg-bg-body text-center'>
        <figure>
            <img  src={errorImg} alt="error image" className='w-4/5 lg:w-4/7 mx-auto' />
        </figure>
        <h2 className='text-dark-04 text-[3.6rem] lg:text-[4.8rem] font-semibold'>Oops, page not found!</h2>
        <p className="text-[2rem] text-dark-05">
            Sorry, the page you looking for might be removed, renamed, or is temporarily unavailable.
        </p>
        <div className="flex gap-6 mt-4">
            <Link to={'/'}>
              <button className="btn-gradient cursor-pointer">Back to Home</button>
            </Link>
            <Link to={'/apps'}>
              <button className="btn-gradient cursor-pointer">Browser Apps</button>
            </Link>
        </div>
    </div>
  )
}

export default PageNotFound;