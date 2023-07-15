import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Compunent/Navbar/Navbar";
import Footer from "../Compunent/Footer";
const Main = () => {
  return (
    <div className="">
      <Navbar className="" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
