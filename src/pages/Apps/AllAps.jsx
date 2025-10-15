import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { PiMagnifyingGlassThin } from "react-icons/pi";
import AppsCards from '../../components/shared/AppsCards';
import Loader from '../../components/shared/Loader';
import getCardsRandomly from '../../utils/getCardsRandomly';

function AllApps() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  
  const initialData = useLoaderData();
  if(data.length === 0 && initialData){
    setData(initialData);
  }
  // console.log(data)
  function handleSearch(e, isSubmit = true){
    if(isSubmit)e.preventDefault();
    // console.log(data, initialData)
    setLoading(true);
    setError(false);
    setData(initialData);

    let value = (isSubmit ? e.target['0'] : e.target).value.toLowerCase();

    const filterData = data.filter(elm => (
      elm.title.toLowerCase().includes(value)
    ));
    
    setData(filterData);
    if(filterData.length === 0){
      setError(true);
    }
  }
  
  const cards = getCardsRandomly(data);
  let totalApps = cards.length;
  if(error)totalApps = 0;
  // console.log(cards)
  
  return (
    <div className='containers bg-bg-body py-15 lg:py-32 text-center'>
        <h2 className="text-dark-04 text-[2.8rem] lg:text-[4.8rem] font-bold">
            Our All Applications
        </h2>
        <p className="text-dark-05 text-[1.6rem] lg:text-[2rem] mt-[1.6rem]">
            Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex flex-col gap-8 lg:flex-row justify-between items-center mt-18.5">
          <p className="text-dark-04 text-[2rem] lg:text-[2.4rem] font-semibold">
            ({loading ? " " : totalApps}) Apps Found
          </p>
          <form method='POST' onSubmit={(e)=> handleSearch(e)}>
            <div className="search">
              <PiMagnifyingGlassThin />
              <input
              type="search"
              name="searchApp"
              id="searchApp"
              placeholder='Search app'
              onChange={(e)=> handleSearch(e, false)}
              className='focus:outline-0' />
            </div>
          </form>
        </div>
        {
          loading ? <Loader time={2} setLoading={setLoading} /> : (
              error ? <NoAppsFound /> :(
              <div className="my-16 grid grid-cols-[repeat(auto-fill,minmax(34.8rem,1fr))] gap-6.5">
                  <AppsCards cards={cards}></AppsCards>
              </div>
            )
          )
        }
    </div>
  )
}

function NoAppsFound(){
  return (
      <div className="mt-8 flex flex-col justify-center items-center gap-8">
        <p className='text-[4.8rem] text-stone-500 font-bold'>
          No Apps Found
        </p>
        <Link to={'/apps'}>
          <button className="btn-gradient cursor-pointer">
            Show All Apps
          </button>
        </Link>
      </div>
    )
}

export default AllApps;