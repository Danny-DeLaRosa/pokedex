import React from "react";

// type  = {}

const IndividualPokemon = ({ pokemon }: any) => {
  return (
    <>
      {pokemon ? (
        <div className="overflow-auto ml-2 bg-white text-black flex-col w-5/6 h-5/6 rounded-lg shadow-red-600 border-red-400 border-2 flex justify-center items-center shadow-md">
          <div>
            <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
          </div>
          <span>{pokemon.name}</span>
        </div>
      ) : (
        <div className="overflow-auto ml-2 bg-white text-black flex-col w-5/6 h-5/6 rounded-lg shadow-red-600 border-red-400 border-2 flex justify-center items-center shadow-md">
          <span>Choose your Pokemon</span>
        </div>
      )}
    </>
  );
};

export default IndividualPokemon;
