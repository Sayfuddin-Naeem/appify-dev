import React from 'react'
import { useParams, useRouteLoaderData } from 'react-router';
import AppsNotFound from '../ErrorPage/AppsNotFound';
import AppDetailCard from '../../components/features/AppDetailCard/AppDetailCard';

function AppsDetails() {
  const apps = useRouteLoaderData('apps');
  const { id: appId } = useParams();
//   console.log("id", id);
  const app = getAppsById(appId, apps);
  if(!app){
    return <AppsNotFound />;
  }
  const {id, description, ratings} = app;

  

  return (
    <div className="bg-bg-body containers py-15 lg:py-32">
        <AppDetailCard app={app} />
    </div>
  )
}

function getAppsById(id, apps){
    id = parseInt(id);
    const app = apps.find(elm => elm.id === id);

    return app;
}

export default AppsDetails;