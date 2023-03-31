import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './css/index.css';
import App from './components/App';
import ErrorPage from "./pages/error-page";

import reportWebVitals from './reportWebVitals';
import About from "./pages/about";
import Accommodation from "./pages/accommodation";
import {AccommodationsProvider} from "./utils";

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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AccommodationsProvider>
          <RouterProvider router={router}/>
      </AccommodationsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
