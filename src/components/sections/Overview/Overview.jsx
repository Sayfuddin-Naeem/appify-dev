import React from 'react'

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
                items.map(item => <DataCard item={item} />)
            }
        </div>
    </div>
  )
}

function DataCard({item}){
    const {text1, content, text2} = item;
    return(
        <div className='flex flex-col gap-4 lg:gap-6'>
          <p className="">{text1}</p>
          <p className="font-extrabold text-[5.4rem] lg:text-[6.4rem]">{content}</p>
          <p className="">{text2}</p>
        </div>
    );
}

export default Overview;