import React from 'react';
import { RxDownload } from "react-icons/rx";
import { FaStar } from "react-icons/fa6";
import formatNumber from '../../../utils/formatNumber';
import { removeDataFromLS } from '../../../utils/LocalStorage';
import { toast } from 'react-toastify';

function InstalledAppCard(props) {
  const {app} = props;
  const {id, title, image, ratingAvg, downloads, size } = app;
  return (
    <div className='card-installed'>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-[1.6rem]">
            <figure className='w-60 h-60 lg:w-32 lg:h-32'>
                <img src={image} alt={title} className='w-full rounded-[0.8rem]' />
            </figure>
            <div className="flex flex-col items-center lg:items-start lg:justify-between gap-4 lg:gap-10">
                <h3 className="text-dark-04 font-medium text-[2rem]">{title}</h3>
                <div className="flex gap-[1.6rem]">
                    <p className="text-download flex gap-1 items-center">
                        <RxDownload color='#00D390' />
                        {formatNumber(downloads)}
                    </p>
                    <p className="text-rating flex gap-1 items-center">
                        <FaStar color='#FF8811' />
                        {ratingAvg}
                    </p>
                    <p className="text-dark-05 ">
                        {size} M
                    </p>
                </div>
            </div>
        </div>
        <button
          onClick={() => handleUninstall({id, title, parentProps: props})}
          className="btn-installed text-[1.6rem]">
            Uninstall
        </button>
    </div>
  )
}

function handleUninstall({id, title, parentProps}){
    const {setLoading, installedApps, setInstalledApps} = parentProps;
    setLoading(true);
    removeDataFromLS(id, "installedApps");

    const updatedApps = installedApps.filter(elm => elm.id !== id);
    setInstalledApps(updatedApps);

    toast.info(
      <p>
        The app <span className="text-rating font-semibold">{title}</span> has been uninstalled ❌🗑️
      </p>,
      {
        icon: '🗑️',
        autoClose: 2000,
        position: "top-right",
        pauseOnHover: true,
        pauseOnFocusLoss: true,
      }
    );
}

export default InstalledAppCard;