import React, { useEffect } from 'react';
import { HashLoader } from 'react-spinners';

function Loader({time, setLoading}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000 * time);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoaderContent/>
  )
}

function LoaderContent(){
  return (
    <div className='flex justify-center items-center my-10'>
      <HashLoader
        color='#9F62F2'
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;