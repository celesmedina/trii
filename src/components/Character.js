import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Character() {
  let { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + id)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [id]);

  if (!character) return null;
  return (
    <div className="w-1/2  mx-auto py-20  text-white ">
      <div className="bg-slate-700 flex flex-col items-center pt-5 justify-center  rounded-lg">
        <img src={character.image} />
        <p className="font-extrabold text-2xl py-2">{character.name}</p>
        <p className="font-bold text-xl py-2">Status:</p>
        <p className="text-xl py-2">{character.status}</p>
        <p className="font-bold text-xl py-2">Species</p>
        <p className="text-xl py-2">{character.species}</p>
        <p className="font-bold text-xl py-2">Origin:</p>
        <p className=" text-xl py-2">{character.origin.name}</p>
        <p className="font-bold text-xl py-2">Gender:</p>
        <p className=" text-xl py-2">{character.gender}</p>
        <button className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <a href="/home">Volver</a>
        </button>
      </div>
    </div>
  );
}

export default Character;
