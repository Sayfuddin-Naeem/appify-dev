import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import PageNotFound from "../pages/ErrorPage/PageNotFound";
import Home from "../pages/Home/Home";
import AllAps from "../pages/Apps/AllAps";
import Installation from "../pages/Installation/Installation";
import getDataFromAPI from "../services/getDataFromAPI";
import AppsDetails from "../pages/AppsDetails/AppsDetails";
import Loader from "../components/shared/Loader";


const router = createBrowserRouter([
    {
        path: "/",
            Component: Root,
            errorElement: <PageNotFound />,
            HydrateFallback: Loader,

            children: [
                {
                    index: true,
                    Component: Home,
                    loader: getDataFromAPI,
                },

                {
                    id: 'apps',
                    path: '/apps',
                    loader: getDataFromAPI,
                    children: [
                        {
                            index: true,
                            Component: AllAps,
                        },
                        {
                            path: ':id',
                            Component: AppsDetails,
                        },
                    ],
                },

                {
                    path: '/installation',
                    Component: Installation,
                    loader: getDataFromAPI,
                },
            ],
    }
]);

export default router;