import React, { useEffect } from 'react'
import apiClient from '../services/api'

function Search() {
  useEffect(() => {
    // Ajout de l'API
    apiClient.get('?term=jack+jonhson')
    .then(response => console.log(response))
  })

  return (
    <div className='container'>
        <p>Rechercher une musique</p>
        <div className='row'>
            <div className='col-lg-4'>
                <input type='text' className='form-control' placeholder="Entrer le nom d'un artiste"/>
            </div>
            <div className='col-lg-4'>
                <button className='btn btn-primary'>Rechercher</button>
            </div>
        </div>
    </div>
  )
}

export default Search