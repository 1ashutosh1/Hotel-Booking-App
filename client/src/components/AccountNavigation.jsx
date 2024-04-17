import React from 'react'
import { FaRegBuilding, FaRegUser } from 'react-icons/fa6'
import { IoListSharp } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'

const AccountNavigation = () => {
  const {pathname} = useLocation();
  function linkClasses(type = null) {
    let classes = "inline-flex gap-1 py-2 px-6";
    if (type === false) {
      classes += " bg-primary text-white rounded-full";
    } else{
      classes += " bg-gray-200 rounded-full"
    }
    return classes;
  }

  return (
    <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
    <Link className={linkClasses("profile")} to={"/account"}>
    <FaRegUser className="my-auto"/>
      My profile
    </Link>
    <Link className={linkClasses("bookings")} to={"/account/bookings"}>
    <IoListSharp className="my-auto"/>
      My Booking
    </Link>
    <Link className={linkClasses("places")} to={"/account/places"}>
    <FaRegBuilding className="my-auto"/>
      My accommodations
    </Link>
  </nav>
  )
}

export default AccountNavigation