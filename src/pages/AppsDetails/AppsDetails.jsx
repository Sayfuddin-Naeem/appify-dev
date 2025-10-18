import React from 'react'
import { useParams, useRouteLoaderData } from 'react-router';
import AppsNotFound from '../ErrorPage/AppsNotFound';
import AppDetailCard from '../../components/features/AppDetailCard/AppDetailCard';
import RatingsChart from '../../components/features/RatingsChart/RatingsChart';

function AppsDetails() {
  const apps = useRouteLoaderData('apps');
  const { id: appId } = useParams();
//   console.log("id", id);
  const app = getAppsById(appId, apps);
  if(!app){
    return <AppsNotFound />;
  }
  const {description, ratings} = app;

  

  return (
    <div className="bg-bg-body containers py-15 lg:py-32 flex flex-col gap-16">
        <AppDetailCard app={app} />
        <div className="divider"></div>
        <RatingsChart ratings={ratings} />
        <div className="divider"></div>
        <div className="">
            <h2 className="text-[1.8rem] lg:text-[2.4rem] font-semibold text-dark-04">
                Description
            </h2>
            <p className="text-dark-05 text-[1.6rem] lg:text-[2rem] mt-[2.4rem]">
                {description}
            </p>
        </div>
    </div>
  )
}

function getAppsById(id, apps){
    id = parseInt(id);
    const app = apps.find(elm => elm.id === id);

    return app;
}

export default AppsDetails;