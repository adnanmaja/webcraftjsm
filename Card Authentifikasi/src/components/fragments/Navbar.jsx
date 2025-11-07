import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"; // Import the auth hook
import GamadanG from "../../assets/GamadanG.svg";
import Palelu from "../../assets/palelu.svg"; 

function Navbar() {
  const [state, dispatch] = useReducer(reducer, { property1: "default" });
  const { isAuthenticated, user, logout } = useAuth(); // Get auth state

  const dashboardPadding = state.property1 === "after" ? "py-2.5 px-5" : "py-1.5 px-4";

  const handleLogout = () => {
    logout();
    // Optional: redirect to home after logout
    // window.location.href = "/";
  };

  return (
    <nav
      onMouseEnter={() => dispatch("mouse_enter")}
      onMouseLeave={() => dispatch("mouse_leave")}
      className={`
        sticky top-0 z-50
        flex items-center justify-between
        bg-white
        w-full max-w-[1921px]
        ${state.property1 === "after" ? "h-[93px] shadow-lg" : "h-[59px] shadow-none"}
        px-8 mx-auto
        bg-white-900 text-gray
        transition-[height,box-shadow] duration-300
      `}
    >
      {/* KIRI */}
      <div className="flex items-center h-full space-x-5">
        <img src={Palelu} alt="Logo" className="h-10 w-10 rounded-full" />
        <img src={GamadanG} alt="Logo" className="h-8 w-auto" />
      </div>

      {/* KANAN */}
      <div className="flex items-center space-x-4 text-[15px] font-bold font-medium">
        {/* Home */}
        <Link
          to="/#kenapa-gamadang"
          className={`
            border-1 border-white
            rounded-2xl
            ${dashboardPadding}
            transition-all duration-300
            flex items-center justify-center
          `}
        >
          Home
        </Link>

        {/* About */}
        <Link
          to="/"
          className={`
            border-1 border-white
            rounded-2xl
            ${dashboardPadding}
            transition-all duration-200
            flex items-center justify-center
          `}
        >
          About
        </Link>

        {/* Conditional Dashboard/Login Button */}
        {isAuthenticated ? (
          <>
            {/* Dashboard Button (shown when logged in) */}
            <Link
              to="/dashboard"
              className={`
                border-1 border-white
                px-4 py-1.5
                text sm
                rounded-2xl
                ${dashboardPadding}
                bg-orange-200 hover:text-gray-900
                transition-all duration-300
                flex items-center justify-center font-size m-3.5
              `}
            >
              Dashboard
            </Link>
            
            {/* User Menu (optional) */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">
                Hi, {user?.name || user?.email}
              </span>
              <button
                onClick={handleLogout}
                className={`
                  border-1 border-white
                  rounded-2xl
                  ${dashboardPadding}
                  bg-gray-100 hover:bg-gray-200
                  transition-all duration-300
                  flex items-center justify-center text-sm
                `}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          /* Login Button (shown when not logged in) */
          <Link
            to="/login"
            className={`
              border-1 border-white
              px-4 py-1.5
              text sm
              rounded-2xl
              ${dashboardPadding}
              bg-orange-200 hover:text-gray-900
              transition-all duration-300
              flex items-center justify-center font-size m-3.5
            `}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return { ...state, property1: "after" };
    case "mouse_leave":
      return { ...state, property1: "default" };
    default:
      return state;
  }
}

export default Navbar;