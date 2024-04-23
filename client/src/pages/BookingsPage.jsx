import React, { useEffect, useState } from "react";
import AccountNavigation from "../components/AccountNavigation";
import axios from "axios";
import PlaceImg from "../components/PlaceImg";
import { differenceInCalendarDays, format } from "date-fns";
import { IoMoonOutline } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import BookingDates from "../components/BookingDates";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);
  return (
    <div>
      <AccountNavigation />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <Link to={`/account/bookings/${booking._id}`} className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-48">
                <PlaceImg place={booking.place} />
              </div>
              <div className="py-3 pr-3 grow">
                <h2 className="text-xl">{booking.place.title}</h2>
                <div className="text-xl">
                  <BookingDates booking={booking} className='mb-1 mt-1 text-gray-500'/>
                  <div className="flex gap-1 items-center">
                  <CiMoneyCheck1 className="text-2xl"/>
                   Total Price: ${booking.price}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BookingsPage;
