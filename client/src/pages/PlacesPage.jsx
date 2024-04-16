import { Link, useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import Perks from "../components/Perks";
import axios from 'axios';

export default function PlacesPage() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setmaxGuests] = useState(1);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function addPhotoByLink(ev){
    ev.preventDefault();
   const {data:filename} = await axios.post('/upload-by-link', {link: photoLink});
   setAddedPhotos(prev => {
    return [...prev,filename];
   })
   setPhotoLink('');
  }

  function uploadPhoto(ev){
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i]);
    }
    axios.post('/upload', data, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(response => {
      const {data:filenames} = response;
      setAddedPhotos(prev => {
        return [...prev, ...filenames];
      });
    })
  }
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={"/account/places/new"}
          >
            <IoMdAdd className="my-auto" />
            Add new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            {preInput(
              "Title",
              "title for your place should be short and catchy as in advertisement"
            )}
            <input
              type="text"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              placeholder="title, for example: My Lovely Apartment"
            />
            {preInput("Address", "Address to this place")}
            <input
              type="text"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
              placeholder="address"
            />
            {preInput("Photos", "more = better")}
            <div className="flex gap-2">
              <input
                type="text"
                value={photoLink}
                onChange={(ev) => setPhotoLink(ev.target.value)}
                placeholder="Add using a link .....jpg"
              />
              <button onClick={addPhotoByLink} className="bg-gray-200 px-3 rounded-2xl">
                Add&nbsp;Photo
              </button>
            </div>
            <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {addedPhotos.length > 0 && addedPhotos.map(link => (
                <div className="h-32 flex">
                 <img className="rounded-2xl w-full object-cover position" src={'http://localhost:4000/uploads/' + link} alt="" />
                </div>
              ))}
              <label className="h-32 flex items-center gap-1 justify-center border bg-transparent rounded-2xl text-2xl p-2 text-gray-600 cursor-pointer">
              <input type="file" multiple className="hidden" onChange={uploadPhoto}/>
                <IoCloudUploadOutline className="w-7 h-7" />
                Upload
              </label>
            </div>
            {preInput("Description", "description of the place")}
            <textarea
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            {preInput("Perks", "select all the perks of your place")}
            <Perks selected={perks} onChange={setPerks} />
            {preInput("Extra Info", "Rules and Regulations")}
            <textarea
              value={extraInfo}
              onChange={(ev) => setExtraInfo(ev.target.value)}
            />
            {preInput(
              "Check in&out times",
              "add check in and out times, remember to have some time window for cleaning the room"
            )}
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input
                  type="text"
                  value={checkIn}
                  onChange={(ev) => setCheckIn(ev.target.value)}
                  placeholder="14:00"
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input
                  type="text"
                  value={checkOut}
                  onChange={(ev) => setCheckOut(ev.target.value)}
                  placeholder="20:00"
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                <input
                  type="number"
                  value={maxGuests}
                  onChange={(ev) => setmaxGuests(ev.target.value)}
                />
              </div>
            </div>
            <button className="primary my-2">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
