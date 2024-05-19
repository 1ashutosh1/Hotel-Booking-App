import React, { useContext, useEffect, useState } from "react";
import {differenceInCalendarDays} from 'date-fns'
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'
import { UserContext } from "../UserContext";

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberofGuests] = useState(1);
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [redirect,setRedirect] = useState('');
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
 useEffect(() => {
  if(user){
    setName(user.name);
  }
 },[user])

  let numberOfNights = 0;
  if(checkIn && checkOut){
    numberOfNights = differenceInCalendarDays(new Date(checkOut),new Date(checkIn));
  }

  async function bookThisPlace(){
    if(!user){
       navigate('/login');
       return;
    }
    const response = await axios.post('/bookings',{
      checkIn,checkOut,numberOfGuests,name,phone,
      place: place._id,
      price: numberOfNights * place.price,
    });
    
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  if(redirect){
    return <Navigate to={redirect} />
  }


  return (
    <div className="bg-white shadow p-3 rounded-2xl">
      <div className="text-2xl text-center">
        Price: ${place.price} / per night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-2 px-4">
            <label>From:</label>
            <input
              type="date"
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
            />
          </div>
          <div className="py-2 px-4 border-l">
            <label>To:</label>
            <input
              type="date"
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
            />
          </div>
        </div>
        <div className="py-2 px-4 border-t">
          <label>Number of guests:</label>
          <input
            type="number"
            value={numberOfGuests}
            onChange={(ev) => setNumberofGuests(ev.target.value)}
          />
        </div>
        {numberOfNights > 0 && (
          <div className="py-2 px-4 border-t">
          <label>Your Full Name:</label>
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
          />
        </div>
        )}
      </div>
      <button onClick={bookThisPlace} className="primary mt-4">
        Book this Place
        {numberOfNights > 0 && (
          <span> ${numberOfNights * place.price}</span>
        )}
      </button>
    </div>
  );
};

export default BookingWidget;
