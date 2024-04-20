import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TbGridDots } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import BookingWidget from '../components/BookingWidget';

const PlacePage = () => {
  const {id} = useParams();
  const [place,setPlace] = useState(null);
  const [showAllPhotos,setShowAllPhotos] = useState(false);
  useEffect(() => {
    if(!id){
      return;
    }
    axios.get(`/places/${id}`).then(response => {
     setPlace(response.data);
    });
  },[id])

  if(!place) return '';

  if(showAllPhotos){
    return (
      <div className="absolute inset-0 bg-white min-h-screen">
        <div className='p-8 grid gap-4'>
        <div>
          <h2 className='text-3xl mr-36'>Photos of {place.title}</h2>
         <button onClick={() => setShowAllPhotos(false)} className='fixed right-12 top-8 flex items-center gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white '>
         <IoMdClose />
          Close Photos
         </button>  
        </div>
         {place?.photos?.length > 0 && place.photos.map(photo => (
          <div>
            <img className='w-full' src={'http://localhost:4000/uploads/'+photo} alt="" />
          </div>
         ))}
        </div>
      </div>
    )
  }

  return (
    <div className='mt-6 bg-gray-100 -mx-8 px-8 pt-6'>
     <h1 className='text-3xl'>{place.title}</h1> 
     <a className='flex gap-1 items-center my-2 font-semibold underline' target='_blank' href={'https://maps.google.com/?q=' + place.address}>
     <FiMapPin />
      {place.address}
      </a>
     
     <div className="relative">
     <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
      <div>
        {place.photos?.[0] && (
          <div>
            <img onClick={() => setShowAllPhotos(true)} className='w-full cursor-pointer aspect-square object-cover' src={'http://localhost:4000/uploads/'+place.photos[0]} alt="" />
          </div>
        )}
      </div>
      <div className='grid'>
      {place.photos?.[1] && (
          <img onClick={() => setShowAllPhotos(true)} className='cursor-pointer aspect-square object-cover' src={'http://localhost:4000/uploads/'+place.photos[1]} alt="" />
        )}
        <div className="overflow-hidden">
        {place.photos?.[2] && (
          <img onClick={() => setShowAllPhotos(true)} className='cursor-pointer aspect-square object-cover relative top-2' src={'http://localhost:4000/uploads/'+place.photos[2]} alt="" />
        )}
        </div>
      </div>
     </div>
     <button onClick={() => setShowAllPhotos(true)} className='flex gap-1 items-center absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-gray-500'>
     <TbGridDots />
      Show more Photos
      </button>
     </div>
      <div className='mt-8 mb-8 grid gap-6 grid-cols-1 md:grid-cols-[2fr_1fr]'>
       <div>
     <div className='my-4'>
      <h2 className='font-semibold text-2xl'>Description</h2>
      {place.description}
      </div>
        Check-in: {place.checkIn} <br />
        Check-out: {place.checkOut} <br />
        Max number of Guests: {place.maxGuests}
       </div>
       <div>
        <BookingWidget place={place}/>
       </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
      <h2 className='font-semibold text-2xl'>Extra Info</h2>
      <div className='mt-1 mb-4 text-sm text-gray-700 leading-5'>{place.extraInfo}</div>
      </div>
    </div>
  )
}

export default PlacePage