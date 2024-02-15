import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return (
    <>
      <div className="w-[100%] h-[100%]">
        <RouterProvider router={appRoute} fallbackElement={"Loading...."} />
      </div>
    </>
  );
};

export default Body;
