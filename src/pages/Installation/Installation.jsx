import React, { useEffect, useState } from 'react';
import { GrInstall } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { getDataFromLS } from '../../utils/LocalStorage';
import InstalledAppCard from '../../components/features/InstalledAppCard/InstalledAppCard';
import { useLoaderData } from 'react-router';
import Loader from '../../components/shared/Loader';
import { toast } from 'react-toastify';

function Installation() {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const apiData = useLoaderData();
  // console.log(apiData)

  useEffect(()=> {
    const dataLS = getDataFromLS("installedApps");
    const filteredData = apiData.filter(app => (
      dataLS.some(elm => elm.id === app.id)
    ));
    // console.log(filteredData);
    setInstalledApps(filteredData);
  }, [apiData]);

  function handleSortBySize(isLow = true){
    const sortedApps = installedApps.sort((a, b) => (
      isLow ? (a.size - b.size) : (b.size - a.size)
    ));
    setInstalledApps(sortedApps);
    setLoading(true);

    toast.info(
      <p>
        Sorted by <span className="text-download font-semibold">Size</span> — {isLow ? "Low to High 📊" : "High to Low 📉"}
      </p>,
      {
        icon: "📦",
        autoClose: 1500,
      }
    );
  };

  const totalApps = installedApps.length;
  return (
    <div className='containers bg-bg-body py-15 lg:py-32'>
      <div className="text-center">
        <h2 className="text-dark-04 text-[2.8rem] lg:text-[4.8rem] font-bold flex justify-center items-center gap-8">
          Your Installed Apps
          <GrInstall color='#9F62F2' size={50} />
        </h2>
        <p className="text-dark-05 text-[1.6rem] lg:text-[2rem] mt-[1.6rem]">
            Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="mt-16">
        <div className="flex justify-between gap-6">
          <p className="text-gradient text-[1.8rem] lg:text-[2.4rem] font-semibold active flex flex-col">
            {loading ? "" : totalApps} Apps Found
          </p>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn w-max h-15 m-1 text-dark-05 text-[1.4rem] rounded-[0.5rem]">
              Sort By Size <IoMdArrowDropdown />
            </div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-5 mt-1 ml-3 w-52 p-2 shadow-sm">
              <li><a onClick={handleSortBySize}>Low - High</a></li>
              <li><a onClick={() => handleSortBySize(false)}>High - Low</a></li>
            </ul>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col justify-center items-center gap-4">
          {
            loading ? <Loader setLoading={setLoading} /> : (
              installedApps.map(app => (
                <InstalledAppCard
                  key={app.id}
                  app={app}
                  setLoading={setLoading}
                  installedApps={installedApps}
                  setInstalledApps={setInstalledApps} />
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Installation;