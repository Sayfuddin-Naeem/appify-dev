import React from 'react';
import { useLoaderData } from 'react-router';
import Hero from '../../components/sections/Hero/Hero';
import Overview from '../../components/sections/Overview/Overview';

function Home() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className='bg-bg-body w-full'>
        <Hero></Hero>
        <Overview></Overview>
    </div>
  )
}

export default Home;