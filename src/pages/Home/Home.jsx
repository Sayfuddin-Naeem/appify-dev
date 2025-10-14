import React from 'react';
import { useLoaderData } from 'react-router';
import Hero from '../../components/sections/Hero/Hero';
import Overview from '../../components/sections/Overview/Overview';
import TrendingApps from '../../components/sections/TrendingApps/TrendingApps';

function Home() {
  const data = useLoaderData();

  return (
    <div className='bg-bg-body w-full'>
        <Hero></Hero>
        <Overview></Overview>
        <TrendingApps data={data}></TrendingApps>
    </div>
  )
}

export default Home;