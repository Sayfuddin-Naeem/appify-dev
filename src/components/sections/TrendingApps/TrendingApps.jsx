import React, { Suspense } from 'react';
import { Link } from 'react-router';
import AppsCards from '../../shared/AppsCards';
import Loader from '../../shared/Loader';
import getCardsRandomly from '../../../utils/getCardsRandomly';

function TrendingApps({data}) {
    
    const cards = getCardsRandomly(data, 8, true);
    // console.log("length: ",filterData.length)
  return (
    <div className='containers py-15 lg:py-32 text-center'>
        <h2 className="text-dark-04 text-[2.8rem] lg:text-[4.8rem] font-bold">
            Trending Apps
        </h2>
        <p className="text-dark-05 text-[1.6rem] lg:text-[2rem] mt-[1.6rem]">
            Explore All Trending Apps on the Market developed by us
        </p>
        <div className="my-16 grid grid-cols-[repeat(auto-fill,minmax(34.8rem,1fr))] gap-6.5">
            <Suspense fallback={<Loader />}>
                <AppsCards cards={cards}></AppsCards>
            </Suspense>
        </div>
        <Link to={'/apps'}>
          <button className='py-[1.2rem] px-[1.6rem] rounded-[0.4rem] bg-gradient text-white font-semibold cursor-pointer'>Show All</button>
        </Link>
    </div>
  )
}

export default TrendingApps;