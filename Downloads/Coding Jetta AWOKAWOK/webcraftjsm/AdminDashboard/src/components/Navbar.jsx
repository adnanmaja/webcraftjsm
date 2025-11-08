import React, { useReducer } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import Palelu from "../assets/palelu.svg";

function Navbar() {
  const [state, dispatch] = useReducer(reducer, { property1: "default" });

  const dashboardPadding =
    state.property1 === "after" ? "py-2.5 px-5" : "py-1.5 px-4";

  return (
    <nav
      onMouseEnter={() => dispatch("mouse_enter")}
      onMouseLeave={() => dispatch("mouse_leave")}
      className={`
        sticky top-0 z-50
        flex items-center justify-between
        bg-white
        w-full max-w-[1920px]
        ${
          state.property1 === "after"
            ? "h-[93px] shadow-lg"
            : "h-[59px] shadow-none"
        }
        px-8 mx-auto
        bg-white-900 text-gray
        transition-[height,box-shadow] duration-300
      `}
    >
      {/* KIRI */}
      <div className="flex items-center h-full space-x-5">
        <img 
          src={Palelu} 
          alt="Palelu Logo" 
          className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded"
        />
        <h1
          className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-normal font-javassoul leading-none"
          style={{
            textShadow: `
              -1px -1px 0 #E7A24A,
              1px -1px 0 #E7A24A,
              -1px 1px 0 #E7A24A,
              1px 1px 0 #E7A24A,
              -1px 0 0 #E7A24A,
              1px 0 0 #E7A24A,
              0 -1px 0 #E7A24A,
              0 1px 0 #E7A24A,
              0 0 8px rgba(240, 138, 6, 0.5)
            `,
          }}
        >
          GamadanG
        </h1>
      </div>

      {/* KANAN */}
      <div className="flex items-center gap-2 sm:gap-3 xl:gap-4 text-xs sm:text-sm lg:text-base xl:text-lg font-medium">
        {/* Home */}
        <Link
          to="/#kenapa-gamadang"
          className={`
            px-2 sm:px-3 xl:px-4 py-1
            text-neutral-700 hover:text-neutral-900
            transition-colors duration-300
            font-poppins
          `}
        >
          Home
        </Link>

        {/* About */}
        <Link
          to="/"
          className={`
            px-2 sm:px-3 xl:px-4 py-1
            text-neutral-700 hover:text-neutral-900
            transition-colors duration-200
            font-poppins
          `}
        >
          About
        </Link>

        {/* Dashboard */}
        <Link
          to="/dashboard"
          className={`
            px-2 sm:px-3 xl:px-4 py-1 sm:py-1.5 xl:py-2
            rounded-full
            bg-gradient-to-br from-orange-300 to-orange-200
            text-neutral-700 hover:text-neutral-900
            transition-all duration-300
            shadow-md
            font-poppins
          `}
        >
          Dashboard
        </Link>
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
