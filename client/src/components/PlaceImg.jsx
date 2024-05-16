import React from 'react'

const PlaceImg = ({place,index=0,className=null}) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  if(!place.photos?.length){
    return '';
  }
  if(!className){
    className = 'object-cover'
  }

  return (
    <img className={className} src={`${backendURL}/uploads/` + place.photos[index]} alt="" />
  )
}

export default PlaceImg