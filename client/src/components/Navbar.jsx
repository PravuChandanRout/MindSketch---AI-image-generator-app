import React from "react";
import { assets } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-28 sm:w-32 lg:w-40 " />
      </Link>

      <div>
        {user ? (
          // users details if logged in
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-700">Credit left : 50</p>
            </button>
            <p className="text-gray-700 max-sm:hidden pl-4">Hi, Chandan</p>
            <div className="relative group">
              <img src={assets.profile_icon} className="w-10 drop-shadow" alt="" />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 pr-10 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // login button
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p>
            <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 sm:px-10 text-sm rounded-md">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
