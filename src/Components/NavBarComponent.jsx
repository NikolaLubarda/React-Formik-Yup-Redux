import React from "react";
import { NavLink } from "react-router-dom";

function NavBarComponent() {
  return (
    <nav className="flex justify-between items-center py-4 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-between">
          <li className="mr-6">
            <NavLink
              to="/"
              className="text-lg hover:text-gray-300 transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              to="/register"
              className="text-lg hover:text-gray-300 transition duration-300"
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="text-lg hover:text-gray-300 transition duration-300"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarComponent;
