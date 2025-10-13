import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import PageNotFound from "../pages/ErrorPage/PageNotFound";
import Home from "../pages/Home/Home";
import AllAps from "../pages/Apps/AllAps";
import Installation from "../pages/Installation/Installation";
import getDataFromAPI from "../services/getDataFromAPI";


const router = createBrowserRouter([
    {
        path: "/",
            Component: Root,
            errorElement: <PageNotFound />,

            children: [
                {
                    index: true,
                    Component: Home,
                    loader: getDataFromAPI,
                },

                {
                    path: '/apps',
                    Component: AllAps,
                    loader: getDataFromAPI,
                },

                {
                    path: '/installation',
                    Component: Installation,
                }
            ],
    }
]);

export default router;