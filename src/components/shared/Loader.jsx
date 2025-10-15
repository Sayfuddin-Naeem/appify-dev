import React from 'react';
import { TrophySpin } from 'react-loading-indicators';

function Loader() {
  return (
    <div className='flex justify-center items-center my-6'>
        <TrophySpin color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]}
        text="Loading ..."
        textColor={'#632EE3'}
        size='medium' />
    </div>
  )
}

export default Loader;