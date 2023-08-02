import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../../images/paper-airplane.png";
import Aos from "aos";
import "./navbar.css";
import "aos/dist/aos.css";
import NavToggle from "./NavToggle";
const Navbar = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const menus = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Destination", to: "/destination" },
    { name: "Tour", to: "/tour" },
    { name: "Blog", to: "/blog" },
  ];
  const [isopen, setOpen] = useState(false);

  return (
    <div className={` w-full  position `}>
      <div className="flex justify-between lg:mt-6 items-center ">
        <div className="flex flex-col lg:flex-row lg:items-center ">
          <div className="flex items-center gap-5 lg:mr-[40px]">
            <NavToggle isopen={isopen} setOpen={setOpen} />
            <p className="logo ">
              Trip<span className="text-[#EE685F]">Book</span>
            </p>
          </div>
          <div>
            {/* mobile menu */}
            <div
              className={`flex flex-col ${
                isopen ? "" : "hidden"
              }  lg:hidden gap-10 mt-12  `}
            >
              {menus.map((menu, i) => (
                <NavLink
                  className=" text-[16px] font-normal"
                  key={i}
                  to={menu.to}
                >
                  {menu?.name}
                </NavLink>
              ))}
            </div>
            {/* for web nav start */}
            <div className={`hidden lg:flex gap-10 `}>
              {menus.map((menu, i) => (
                <NavLink
                  className=" text-[16px] font-normal"
                  key={i}
                  to={menu.to}
                >
                  {menu?.name}
                </NavLink>
              ))}
            </div>
            {/* for web nav start end */}
          </div>
        </div>
        <div className="flex gap-8 hidden">
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
