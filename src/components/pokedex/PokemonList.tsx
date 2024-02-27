import React from "react";
import "/Users/delarosadn/Desktop/code.nosync/pokedex/src/app/globals.css"

// type  = {}

const IndividualPokemon = ({
  pokemon,
  fetchSinglePokemon,
  capitalFirstLetter,
}: any) => {
  return (
    <>
      <div className="overflow-auto mr-2 bg-white text-black flex-col w-5/6 h-5/6 rounded-lg shadow-red-600 border-red-400 border-2 flex justify-center items-center shadow-md">
        {pokemon.length > 0 &&
          pokemon.map((pokemon: any) => (
            <div className="w-44 h-24 border-2 rounded-md flex justify-center items-center shadow-md my-4">
              <div
                className="text-bold hover: cursor-pointer"
                onClick={(event: any) => fetchSinglePokemon(pokemon.url)}
              >
                {capitalFirstLetter(pokemon.name)}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default IndividualPokemon;
