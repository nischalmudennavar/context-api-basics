import React, { useState } from 'react'

function Movie({name,year,duration,director}) {

    return (
        <div>
            <h3>{name}</h3>
            <p>{ year}</p>
            <p>{ director}</p>
            <p>{duration}</p>
        </div>
    )
}

export default Movie
