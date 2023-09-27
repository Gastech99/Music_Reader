import React, { useEffect, useState } from "react";
import apiClient from "../services/api";
import Music from "./music";

function Search() {
  useEffect(() => {
    // Ajout de l'API

    console.log(list, "UseEffect")
  }, []);

  const [name, setName] = useState("");
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);

    apiClient
      .get("?term="+name+'&limit=25')
      .then((response) => {
        setList(response.data.results)

        console.log(list, "Voir la liste")
      });

  };

  return (
    <>
      <div className="container mb-3">
        <p>Rechercher une musique</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-4">
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                placeholder="Entrer le nom d'un artiste"
              />
            </div>
            <div className="col-lg-4">
              <button className="btn btn-primary">Rechercher</button>
            </div>
          </div>
        </form>
      </div>
      {/**
        Affichage de la liste des musiques en les passant en props
       */}
      <div className="container m-9">
        <div className="row">
          {
            list.map((item, index) => <div className="col-md-4 mb-4" key={index}>
              <Music music={item}/></div>)
          }
        </div>
      </div>
    </>
  );
}

export default Search;
