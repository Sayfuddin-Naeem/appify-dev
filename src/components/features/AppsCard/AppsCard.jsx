import React from 'react';
import downloadIcon from '../../../assets/images/icon-downloads.png';
import ratingIcon from '../../../assets/images/icon-ratings.png';

function AppsCard() {
  return (
    <div className="card bg-base-100 shadow-card px-[1.6rem] pt-[1.6rem]">
        <figure className="">
            <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body">
            <h2 className="text-dark-04 text-[1.6rem] lg:text-[2rem] font-medium text-left">Pomocat - Cute Timer</h2>
            <div className="card-actions justify-between">
                <button className="btn bg-btn-download flex justify-center items-center gap-8">
                    <img
                        src={downloadIcon}
                        alt="download icon"
                        className='w-6.5 h-6.5' />
                    <span className="text-download font-medium">5</span>
                </button>
                <button className="btn bg-btn-rating flex justify-center items-center gap-8">
                    <img
                        src={ratingIcon}
                        alt="ratings icon"
                        className='w-6.5 h-6.5' />
                    <span className="text-rating font-medium">5</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AppsCard;