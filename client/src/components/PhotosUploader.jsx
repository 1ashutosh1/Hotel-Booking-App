import React, { useState } from "react";
import { IoCloudUploadOutline,IoTrash  } from "react-icons/io5";
import { FaRegStar,FaStar  } from "react-icons/fa";
import axios from 'axios';

const PhotosUploader = ({addedPhotos,setAddedPhotos}) => {
  const [photoLink, setPhotoLink] = useState("");

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        setAddedPhotos((prev) => {
          return [...prev, ...filenames];
        });
      });
  }

  function removePhoto(ev,filename){
    ev.preventDefault();
    setAddedPhotos([...addedPhotos.filter(photo => photo !== filename)]);
  }

  function selectAsMainPhoto(ev,filename){
    ev.preventDefault();
    
    const newAddedPhotos = ([filename,...addedPhotos
      .filter(photo => photo !== filename)]);
    setAddedPhotos(newAddedPhotos);
  }

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          value={photoLink}
          onChange={(ev) => setPhotoLink(ev.target.value)}
          placeholder="Add using a link .....jpg"
        />
        <button
          onClick={addPhotoByLink}
          className="bg-gray-200 px-3 rounded-2xl"
        >
          Add&nbsp;Photo
        </button>
      </div>
      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div className="h-32 flex relative" key={link}>
              <img
                className="rounded-2xl w-full object-cover position"
                src={"http://localhost:4000/uploads/" + link}
                alt=""
              />
              <button onClick={(ev) => removePhoto(ev,link)} className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
              <IoTrash  />
              </button>

              <button onClick={(ev) => selectAsMainPhoto(ev,link)} className="cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
                {link === addedPhotos[0] && <FaStar />}
                {link !== addedPhotos[0] && <FaRegStar />}
              </button>
            </div>
          ))}
        <label className="h-32 flex items-center gap-1 justify-center border bg-transparent rounded-2xl text-2xl p-2 text-gray-600 cursor-pointer">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          <IoCloudUploadOutline className="w-7 h-7" />
          Upload
        </label>
      </div>
    </>
  );
};

export default PhotosUploader;
