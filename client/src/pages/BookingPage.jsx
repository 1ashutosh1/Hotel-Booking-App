import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddressLink from '../components/AddressLink';
import PlaceGallery from '../components/PlaceGallery';
import BookingDates from '../components/BookingDates';

const BookingPage = () => {
  const {id} = useParams();
  const [booking,setBooking] = useState(null);
  useEffect(() => {
    if(id){
      axios.get('/bookings').then(response => {
       const foundBooking = response.data.find(({_id}) => _id === id);
       if(foundBooking){
        setBooking(foundBooking);
       }
      });
    }
  },[id])

  if(!booking){
    return '';
  }

  return (
    <div className="my-8">
      <h1 className='text-3xl'>{booking.place.title}</h1> 
      <AddressLink className='my-2 block'>{booking.place.address}</AddressLink>
      <div className="bg-gray-200 p-4 my-6 rounded-2xl flex justify-between items-center">
        <div>
        <h2 className='text-2xl mb-3'>Your Booking Information:</h2>
        <BookingDates booking={booking} />
        </div>
        <div className='bg-primary p-4 text-white rounded-2xl'>
          <div>Total Price</div>
          <div className='text-3xl'>${booking.price}</div>
        </div>
      </div>
      <PlaceGallery place={booking.place} />
    </div>
  )
}

export default BookingPage