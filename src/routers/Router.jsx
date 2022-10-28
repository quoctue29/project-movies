import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import OurTemplate from "../components/templates/OurTemplate/OurTemplate";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import MovieDetail from "../pages/movieDetail/MovieDetail";

const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "detail/:movieIds",
          element: <MovieDetail />,
        },
      ],
    },
    {
      path: "/",
      element: <OurTemplate />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return routing;
};

export default Router;
