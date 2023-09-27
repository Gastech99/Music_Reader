import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

function Music({ music }) {

  const [favoris, setFavoris] = useState([])

  const addFavoris = (music) => {
    console.log(music, "music AddFavoris")
  }

  return (
    <>
      <div className="col-md-2">
        <div className="card" style={{ width: "18rem" }}>
          <img src={music.artworkUrl100} className="card-img-top" alt="..." />
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{music.artistName}</li>
              <li className="list-group-item">{music.trackCensoredName}</li>
              <button className="btn btn-primary" onClick={() => addFavoris(music)}>Ajouter aux favoris</button>
              {/**
               * Ajout et lecture de la musique avec ReactAudioPlayer
               */}
              <ReactAudioPlayer src={music.previewUrl} controls />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;
