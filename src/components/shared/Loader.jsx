import React from 'react'
import { TrophySpin } from 'react-loading-indicators';

function Loader() {
  return (
    <div className='mx-auto mt-5'>
        <TrophySpin color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]}
        text="Loading ..."
        size='medium' />
    </div>
  )
}

export default Loader;