import React from "react";
import { useState, useEffect } from "react";
import Card from "./Cards";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);

  const [pages, setPages] = useState(0);
  const [filtros, setFiltros] = useState({
    status: "",
  });

  const handleOnClick = (e) => {
    setPage(Number(e.target.value));
  };
  const handleFilterStatus = (e) => {
    setFiltros({
      ...filtros,
      status: e.target.value,
    });
    setPage(1);
  };

  useEffect(() => {
    fetch(
      "https://rickandmortyapi.com/api/character/?page=" +
        page +
        "&status=" +
        filtros.status
    )
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setPages(data.info.pages);
      });
  }, [filtros, page]);

  return (
    <div>
      <div className="text-center py-10">
        <select
          placeholder="Filter by Status"
          onChange={handleFilterStatus}
          className="rounded-md mx-1"
        >
          <option value=""> Status</option>
          <option value="alive"> Alive </option>
          <option value="dead"> Dead </option>
          <option value="unknown"> Unknown</option>
        </select>
      </div>

      <div className="grid grid-cols-1  sm:grid-rows-1 sm:grid-cols-2 sm:gap-7 sm:px-40 sm:mt-10">
        {characters &&
          characters.map((character) => (
            <Card
              id={character.id}
              name={character.name}
              status={character.status}
              location={character.location.name}
              image={character.image}
              species={character.species}
            />
          ))}
      </div>
      <nav className=" sm:py-10">
        <ul className="flex flex-wrap justify-center">
          {Array.from(Array(pages).keys()).map((number) => (
            <li key={number} className="text-white mx-1">
              <button
                onClick={handleOnClick}
                value={number + 1}
                className="hover:font-extrabold"
              >
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Home;
