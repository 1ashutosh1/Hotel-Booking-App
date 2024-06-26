import React, { useContext } from "react";
import { TbHotelService } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Navbar = () => {
  const {user} = useContext(UserContext);
  return (
    <header className="flex justify-between">
      <Link to={'/'} className="flex items-center gap-1">
        <TbHotelService className=" text-3xl" />
        <span className="font-bold text-xl  hidden sm:inline">PrimeStay</span>
      </Link>

      <Link
        to={user?"/account":"/login"}
        className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 items-center"
      >
        <RxHamburgerMenu className="text-xl" />
        <FaUserCircle className="text-xl text-gray-500" />
        {!!user && (
        <div>
          {user.name}
        </div>
       )}
      </Link>
    </header>
  );
};

export default Navbar;
