import React from 'react'
import DataCard from '../../features/DataCard/DataCard';

function Overview() {
    const items = [
        {text1:'Total Downloads', content:'29.6M', text2:'21% more than last month'},
        {text1:'Total Reviews', content:'906K', text2:'46% more than last month'},
        {text1:'Active Apps', content:'132+', text2:'31 more will Launch'}
    ];
  return (
    <div className='containers py-15 lg:py-32 flex flex-col justify-center items-center gap-16 bg-gradient text-white text-center'>
        <h2 className="font-bold text-[2.8rem] lg:text-[4.8rem]">
            Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col lg:flex-row gap-18 lg:gap-9.5">
            {
                items.map((item, index) => <DataCard key={index+1} item={item} />)
            }
        </div>
    </div>
  )
}

export default Overview;