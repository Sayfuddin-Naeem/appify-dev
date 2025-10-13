import React from 'react';
import { useLoaderData } from 'react-router';
import Hero from '../../components/sections/Hero/Hero';

function Home() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className='bg-bg-body w-full'>
        <Hero></Hero>
    </div>
  )
}

export default Home;