import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { LuMonitorPlay } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";
import { MdPool } from "react-icons/md";
import { IoPawSharp, IoWifi } from "react-icons/io5";

const Perks = ({selected,onChange}) => {
  function handleCbClick(ev){
    const {checked,name} = ev.target;
    if(checked){
      onChange([...selected,name]);
    }
    else{
      onChange([...selected.filter(selectedName => selectedName !== name)])
    }
  }

  return (
    <div className="grid mt-3 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      <label className="border p-4 flex gap-2 rounded-2xl items-center cursor-pointer">
        <input type="checkbox" name="wifi" onChange={handleCbClick}/>
        <IoWifi className="my-auto" />
        <span>Wifi</span>
      </label>
      <label className="border p-4 flex gap-2 rounded-2xl items-center cursor-pointer">
        <input type="checkbox" name="parking" onChange={handleCbClick}/>
        <FaCarAlt className="my-auto" />
        <span>Free Parking spot</span>
      </label>
      <label className="border p-4 flex gap-2 rounded-2xl items-center cursor-pointer">
        <input type="checkbox" name="tv" onChange={handleCbClick}/>
        <LuMonitorPlay className="my-auto" />
        <span>TV</span>
      </label>
      <label className="border p-4 flex gap-2 rounded-2xl items-center cursor-pointer">
        <input type="checkbox" name="pets" onChange={handleCbClick}/>
        <IoPawSharp className="my-auto" />
        <span>Pets allowed</span>
      </label>
      <label className="border p-4 flex gap-2 rounded-2xl items-center cursor-pointer">
        <input type="checkbox" name="entrance" onChange={handleCbClick}/>
        <FaHouse className="my-auto" />
        <span>Private Entrance</span>
      </label>
      <label className="border p-4 flex gap-2 rounded-2xl items-center cursor-pointer">
        <input type="checkbox" name="pool" onChange={handleCbClick}/>
        <MdPool className="my-auto" />
        <span>Swimming Pool</span>
      </label>
    </div>
  );
};

export default Perks;
