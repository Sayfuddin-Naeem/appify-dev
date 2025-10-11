import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import PageNotFound from "../pages/ErrorPage/PageNotFound";
import Home from "../pages/Home/Home";
import AllAps from "../pages/Apps/AllAps";
import Installation from "../pages/Installation/Installation";


const router = createBrowserRouter([
    {
        path: "/",
            Component: Root,
            errorElement: <PageNotFound />,
            
            children: [
                {
                    index: true,
                    Component: Home,
                },

                {
                    path: '/apps',
                    Component: AllAps,
                },

                {
                    path: '/installation',
                    Component: Installation,
                }
            ],
    }
]);

export default router;