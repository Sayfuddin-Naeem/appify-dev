import React from 'react';
import formatNumber from '../../../utils/formatNumber';
import downloadImg from '../../../assets/images/icon-downloads.png';
import ratingsImg from '../../../assets/images/icon-ratings.png';
import reviewImg from '../../../assets/images/icon-review.png';

function AppDetailCard({app}) {
  const {title, image, companyName, reviews, ratingAvg, downloads, size} = app;
  const appInfo = [
    {image: downloadImg, text: "Downloads", value: downloads},
    {image: ratingsImg, text: "Average Ratings", value: ratingAvg},
    {image: reviewImg, text: "Total Reviews", value: reviews},
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_3fr] gap-16">
        <figure className='bg-white rounded-2xl'>
            <img
                src={image}
                alt={title}
                className='w-full' />
        </figure>
        <div className="flex flex-col gap-12">
            <div className="text-center lg:text-left">
                <h1 className="text-dark-04 text-[3.2rem] font-bold capitalize">{title}</h1>
                <p className="text-dark-05 text-[1.6rem] lg:text-[2rem] font-bold mt-[0.8rem]">
                    Developed by
                    <span className='text-gradient text-[1.6rem] lg:text-[2rem] font-delius font-bold ml-3'>
                        {companyName}
                    </span>
                </p>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[2.4rem]">
                {
                appInfo.map(elm => (
                    <AppInfo
                        image={elm.image}
                        text={elm.text}
                        value={elm.value} />
                ))
                }
            </div>
            <button className="w-115 py-[1.4rem] px-8 rounded-[0.4rem] flex justify-center items-center gap-10 bg-download text-white text-[1.8rem] lg:text-[2rem] font-semibold">
                Install Now ({size} MB)
            </button>

        </div>
    </div>
  )
}

function AppInfo({image, text, value}){
    return(
        <div className="flex flex-col items-center gap-2 lg:gap-[0.8rem]">
            <img src={image} alt={text} className='w-16 h-16' />
            <p className="text-dark-04 capitalize">{text}</p>
            <h2 className="text-dark-04 text-[4rem] font-extrabold">{formatNumber(value)}</h2>
        </div>
    );
}

export default AppDetailCard;