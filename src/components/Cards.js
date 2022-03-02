import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ id, name, status, location, image, species }) {
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    let path = "/characters/" + id;
    navigate(path);
  };
  return (
    <div
      className="bg-slate-700 rounded-lg text-center sm:flex overflow-hidden sm:text-left my-5 mx-10 sm:m-0 "
      onClick={() => handleOnClick(id)}
    >
      <img src={image} className=" w-full h-auto sm:h-52 sm:w-52" />

      <div className="flex-col flex-1 text-white pl-4 pt-3  ">
        <p className="font-extrabold text-xl "> {name}</p>
        <div className="flex justify-center items-center sm:justify-start">
          <p className="font-bold">
            {status} - {species}
          </p>
        </div>
        <p className="pt-3 text-slate-400 ">Last known location</p>
        <p className="text-lg ">{location}</p>
      </div>
    </div>
  );
}

export default Card;
