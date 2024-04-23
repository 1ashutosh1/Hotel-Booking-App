import React from 'react'
import { FiMapPin } from 'react-icons/fi'

const AddressLink = ({children,className=null}) => {
  if(!className){
   className = 'my-2';
  }
  className += ' flex items-center gap-1 font-semibold underline';
  return (
    <a className={className} target='_blank' href={'https://maps.google.com/?q=' + children}>
    <FiMapPin />
     {children}
     </a>
  )
}

export default AddressLink