import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ element: <Home />, path: "/" }],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
