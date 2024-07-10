import React, { useState } from "react";
import {useSelector} from "react-redux"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import LogoutBtn from "./LogoutBtn";


function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const authStatus = useSelector((state) => state.auth.status)

  return (
    <nav className="bg-black fixed z-50 top-2 left-1/4 right-1/4 rounded-md flex justify-between items-center h-12 text-gray-400 px-4">
      <div>
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
          alt="Logo"
          className="h-5 w-auto"
        />
      </div>
      <div className="flex gap-3">
        <NavLink to="/" className="px-2 text-xl hover:text-white">
          Home
        </NavLink>
        <div className="px-2 text-xl hover:text-white">Store</div>
        <div className="px-2 text-xl hover:text-white">Live TV</div>
        <div className="px-2 text-xl hover:text-white">Categories</div>
        <NavLink to="/MyStuff" className="px-2 text-xl  hover:text-white">
          MyStuff
        </NavLink>
      
      </div>
      <div className="flex gap-4 relative">
        <FontAwesomeIcon
          icon={faSearch}
          className="text-gray-300 cursor-pointer h-5"
        />
         </div>
      <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative m-0'
      >
          <FontAwesomeIcon
            icon={faUser}
            className="text-gray-300 cursor-pointer relative"
            
          />
          {isHovered && (
            <div
              className="absolute top-full -left-4 bg-black rounded-md shadow-lg p-2"
            >
              <NavLink to="/Login" className="block px-2 text-xl hover:text-white">
                Login
              </NavLink>
              <NavLink to="/Signup" className="block px-2 text-xl hover:text-white">
                Signup
              </NavLink>
              {authStatus && (
                <LogoutBtn />
            )}
              </div>
           
          )}
        </div>
       
    </nav>
  );
}

export default Navbar;
