import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import { FaRegUser } from "react-icons/fa6";
import { IoListSharp } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";

const AccountPage = () => {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  function linkClasses(type = null) {
    let classes = "inline-flex gap-1 py-2 px-6";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    } else{
      classes += " bg-gray-200 rounded-full"
    }
    return classes;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
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
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged In as {user.name} ({user.email}) <br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
};

export default AccountPage;
