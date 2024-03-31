import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const PageNotFound = lazy(() => import("./pages/PageNotFound/index"));

const Home = lazy(() => import("./pages/Home/index"));

const MainRouter = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },

  { path: "*", element: <PageNotFound /> },
]);
export default MainRouter;
