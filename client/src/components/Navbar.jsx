import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext);
  return (
    <div className="bg-blue-500 shadow-md py-2 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl flex justify-between items-center">
        {/* Brand name - Work Bridge */}
        <div className="flex items-center">
          <h1
            onClick={() => navigate("/")}
            className="cursor-pointer text-white font-bold text-xl sm:text-2xl md:text-3xl tracking-tight"
          >
            Work Bridge
          </h1>
        </div>

        {/* User section */}
        {user ? (
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              to={"/applications"}
              className="text-sm sm:text-base text-white hover:underline"
            >
              Applied Jobs
            </Link>
            <span className="text-white">|</span>
            <p className="hidden sm:block text-white text-sm sm:text-base">
              Hi, {user.firstName} {user.lastName}
            </p>
            <div className="ml-2">
              <UserButton />
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={(e) => setShowRecruiterLogin(true)}
              className="sm:block text-white text-sm sm:text-base hover:underline"
            >
              Recruiter Login
            </button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-blue-800 hover:bg-blue-900 text-white text-sm sm:text-base px-3 sm:px-6 py-1 sm:py-2 rounded-md transition-colors"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
