import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ClearIcon from "@mui/icons-material/Clear";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="m-auto p-10 sticky top-0 z-50 bg-white shadow"
      onClick={() => setToggle(!toggle)}
    >
      <div className="flex felx-col items-center justify-between">
        <div>
          <h2 className="font-customFont">LOGO</h2>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between gap-8 font-customFont">
            <NavLink to="/" className="nav-link" activeclassname="active">
              Home
            </NavLink>

            <NavLink
              to="/achievements"
              className="nav-link"
              activeclassname="active"
            >
              Achievements
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeclassname="active"
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className="block sm:hidden">
          <button onClick={() => setToggle(!toggle)}>
            <DensityMediumIcon />
          </button>
        </div>

        <div
          className={`sm:hidden fixed top-0 right-0 w-64 h-screen bg-customColor text-white flex flex-col items-center p-8 gap-8 transform ease-in-out duration-300 ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ overflowY: "hidden" }}
        >
          <button onClick={() => setToggle(!toggle)} className="self-end">
            <ClearIcon />
          </button>
          {/* sidenav */}
          <div className="scroll-container">
            <div className="flex justify-between gap-8 flex-col font-customFont font-semibold z-auto ">
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>

              <NavLink to="/achievements" activeclassname="active">
                Achievements
              </NavLink>
              <NavLink to="/contact" activeclassname="active">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
