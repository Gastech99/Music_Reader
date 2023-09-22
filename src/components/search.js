import React, { useEffect, useState } from 'react'
import apiClient from '../services/api'

function Search() {
  useEffect(() => {
    // Ajout de l'API
    apiClient.get('?term=jack+jonhson')
    .then(response => console.log(response))
  }, [])

  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
  }

  return (
    <div className='container'>
        <p>Rechercher une musique</p>
        <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-lg-4'>
                <input type='text' name='name' value={name} 
                className='form-control'
                onChange={e=> setName(e.target.value)}
                placeholder="Entrer le nom d'un artiste"/>
            </div>
            <div className='col-lg-4'>
                <button className='btn btn-primary'>Rechercher</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Search