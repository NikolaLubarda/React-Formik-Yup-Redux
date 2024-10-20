import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

function NavBarComponent() {
  const { userData } = useSelector((state) => state.userStore);
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
          {localStorage.hasOwnProperty("test_user") ? (
            <div className="flex gap-[20px]">
              <button>Log Out</button>
              <Link to="/profile">
                <img
                  className="w-[50px] h-[50px] object-cover rounded-full"
                  src={userData.image}
                  alt=""
                ></img>
              </Link>
            </div>
          ) : (
            <li className="mr-6">
              <NavLink
                to="/register"
                className="text-lg hover:text-gray-300 transition duration-300"
              >
                Register
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBarComponent;
