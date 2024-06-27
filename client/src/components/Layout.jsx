import React from 'react'
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";

function Layout() {
  return (
    <>
        <div className="flex flex-col min-h-screen">
            <Home />
            <div className="flex-grow">
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Layout