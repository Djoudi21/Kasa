import {createBrowserRouter} from "react-router-dom";
import App from "../components/App";
import ErrorPage from "../pages/error-page";
import About from "../pages/about";
import Accommodation from "../pages/accommodation";
import React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
