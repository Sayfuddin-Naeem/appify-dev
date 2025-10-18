import React from 'react';
import appError from "../../assets/images/App-Error.png"
import { Link } from 'react-router';

function AppsNotFound() {
  return (
    <div className='containers bg-bg-body flex flex-col justify-center items-center gap-6 py-32 text-center'>
      <figure>
        <img src={appError} alt="apps not found icon" className='w-100'/>
      </figure>
      <h2 className="text-dark-04 font-semibold text-[2.8rem] lg:text-[4.8rem]">
        OOPS!! APP NOT FOUND
      </h2>
      <p className="text-dark-05 text-[2rem]">
        The App you are requesting is not found on our system.  please try another apps.
      </p>
      <Link to={'/apps'}>
        <button className="btn-gradient cursor-pointer mt-12">Go Back</button>
      </Link>

    </div>
  )
}

export default AppsNotFound;