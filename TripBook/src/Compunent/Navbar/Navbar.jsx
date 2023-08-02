import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../../images/paper-airplane.png";
import Aos from "aos";
import "./navbar.css";
import "aos/dist/aos.css";
const Navbar = () => {
  Aos.init();
  const menus = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Destination", to: "/destination" },
    { name: "Tour", to: "/tour" },
    { name: "Blog", to: "/blog" },
  ];
  const [navbar, setNavbar] = useState(true);

  return (
    <div className={` w-full  position `}>
      {/* for web section */}
      <div className="flex justify-between mt-6 items-center ">
        <div className="flex items-center">
          <img className="w-10" src={image} alt="" />
          <p className="logo">TripBook</p>
        </div>
        <div className="flex gap-10">
          {menus.map((menu, i) => (
            <NavLink className="font-normal text-[16px]" key={i} to={menu.to}>
              {menu?.name}
            </NavLink>
          ))}
        </div>
        <div className="flex gap-8">
          <button className="py-4 px-7 bg-white text-[#faf336] rounded">
            Login Now
          </button>
          <button className="py-4 px-7 text-white bg-[#faf336] rounded">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
