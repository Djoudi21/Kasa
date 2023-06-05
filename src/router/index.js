import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/error-page";
import About from "../pages/about";
import Accommodation from "../pages/accommodation";
import React from "react";
import Home from "../pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/accommodation/:id",
        element: <Accommodation />,
        errorElement: <ErrorPage />,
    },
    {
        path: "*",
        element:  <ErrorPage />,
    },
]);
export default router
