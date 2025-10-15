import React, { Suspense } from 'react';
import { Link, useLoaderData } from 'react-router';
import { PiMagnifyingGlassThin } from "react-icons/pi";
import AppsCards from '../../components/shared/AppsCards';
import Loader from '../../components/shared/Loader';
import getCardsRandomly from '../../utils/getCardsRandomly';

function AllApps() {
  const data = useLoaderData();
  console.log(data)
  
  const cards = getCardsRandomly(data);
  console.log(cards)
  return (
    <div className='containers bg-bg-body py-15 lg:py-32 text-center'>
        <h2 className="text-dark-04 text-[2.8rem] lg:text-[4.8rem] font-bold">
            Our All Applications
        </h2>
        <p className="text-dark-05 text-[1.6rem] lg:text-[2rem] mt-[1.6rem]">
            Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex flex-col lg:flex-row justify-between mt-18.5">
          <p className="text-dark-04 text-[2rem] lg:text-[2.4rem] font-semibold">
            ({cards.length}) Apps Found
          </p>
          <form action="">
            <div className="search">
              <PiMagnifyingGlassThin />
              <input
              type="search"
              name="searchApp"
              id="searchApp"
              placeholder='Search app'
              className='focus:outline-0' />
            </div>
          </form>
        </div>
        <div className="my-16 grid grid-cols-[repeat(auto-fill,minmax(34.8rem,1fr))] gap-6.5">
            <Suspense fallback={<Loader />}>
                <AppsCards cards={cards}></AppsCards>
            </Suspense>
        </div>
    </div>
  )
}

export default AllApps;