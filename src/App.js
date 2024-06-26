import React, { lazy, Suspense, useEffect, useState } from "react";
import './App.css';
import Header from './components/Header';
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import SignIn from "./components/SignIn";


const Cart = lazy(() => import("./components/Cart"));

export const appRouter = createBrowserRouter([
  {
    path: "/", element: <SignIn />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "/app", element: <Body />,
      },
      {
        path: "/app/cart", element: (<Suspense fallback={<h1>Loading...Please wait!!</h1>}><Cart /></Suspense>),
      },
      {
        path: "/app/restaurant/:resId", element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  }

])

function App() {
  return (
    <div className="flex inline-block sm:h-[100%] md:h-[100%] lg:h-[100%] xl:h-[100%] 2xl:h-[99%]">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  )
}


export default App;
