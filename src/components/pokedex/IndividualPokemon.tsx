import React from 'react'

// type  = {}

const IndividualPokemon = ({pokemon}: any) => {

  return (
    <>{ pokemon ?
         <div>
            <div>
                <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
                </div>
                <span>{pokemon.name}</span>
                </div> 
                : 
        <div>
            <span>Choose a Pokemon</span>
        </div>
    }</>
  )
}

  
export default IndividualPokemon

