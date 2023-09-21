import React from 'react'

function Search() {
  return (
    <div className='container'>
        <p>Rechercher une musique</p>
        <div className='row'>
            <div className='col-lg-4'>
                <input type='text' placeholder="Entrer le nom d'un artiste"/>
            </div>
            <div className='col-lg-3'>
                <button className='btn btn-primary'>Rechercher</button>
            </div>
        </div>
    </div>
  )
}

export default Search