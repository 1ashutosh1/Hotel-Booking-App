import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb'

const PlaceGallery = ({place}) => {
  const [showAllPhotos,setShowAllPhotos] = useState(false);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
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
            <img className='w-full' src={`${backendURL}/uploads/`+photo} alt="" />
          </div>
         ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
    <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
     <div>
       {place.photos?.[0] && (
         <div>
           <img onClick={() => setShowAllPhotos(true)} className='w-full cursor-pointer aspect-square object-cover' src={`${backendURL}/uploads/`+place.photos[0]} alt="" />
         </div>
       )}
     </div>
     <div className='grid'>
     {place.photos?.[1] && (
         <img onClick={() => setShowAllPhotos(true)} className='cursor-pointer aspect-square object-cover' src={`${backendURL}/uploads/`+place.photos[1]} alt="" />
       )}
       <div className="overflow-hidden">
       {place.photos?.[2] && (
         <img onClick={() => setShowAllPhotos(true)} className='cursor-pointer aspect-square object-cover relative top-2' src={`${backendURL}/uploads/`+place.photos[2]} alt="" />
       )}
       </div>
     </div>
    </div>
    <button onClick={() => setShowAllPhotos(true)} className='flex gap-1 items-center absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-gray-500'>
    <TbGridDots />
     Show more Photos
     </button>
    </div>
  )
}

export default PlaceGallery