import React from 'react';
import downloadIcon from '../../../assets/images/icon-downloads.png';
import ratingIcon from '../../../assets/images/icon-ratings.png';
import formatNumber from '../../../utils/formatNumber';

function AppsCard({card}) {
    const {image, title, ratingAvg, downloads} = card;

  return (
    <div className="card bg-base-100 shadow-card px-[1.6rem] pt-[1.6rem]">
        <figure className="h-100">
            <img
            src={image}
            alt={title}
            className="rounded-xl object-cover object-center" />
        </figure>
        <div className="card-body">
            <h2 className="text-dark-04 text-[1.6rem] lg:text-[2rem] font-medium text-left">{title}</h2>
            <div className="card-actions justify-between">
                <button className="btn bg-btn-download flex justify-center items-center gap-8">
                    <img
                        src={downloadIcon}
                        alt="download icon"
                        className='w-6.5 h-6.5' />
                    <span className="text-download font-medium">{formatNumber(downloads)}</span>
                </button>
                <button className="btn bg-btn-rating flex justify-center items-center gap-8">
                    <img
                        src={ratingIcon}
                        alt="ratings icon"
                        className='w-6.5 h-6.5' />
                    <span className="text-rating font-medium">{ratingAvg}</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AppsCard;