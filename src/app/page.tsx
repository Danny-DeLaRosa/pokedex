"use client";
import IndividualPokemon from "@/components/pokedex/IndividualPokemon";
import { useEffect, useState } from "react";

type Pokemon = {
  name: string;
  url: string;
};
export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [singlePokemon, setSinglePokemon] = useState<Pokemon | null>(null);

  async function fetchPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await res.json();
    setPokemon(data.results);
    // console.log(data.results[0].url); // this is what is being fetched in the fetchSinglePokemon function
  }

  async function fetchSinglePokemon(url: string) {
    const res = await fetch(`${url}`);
    const data = await res.json();
    setSinglePokemon(data);
  }

  // async function getLocal() {
  //   const res = await fetch("http://localhost:8000/api/tasks");
  //   const data = await res.json();
  //   console.log(data);
  // }

  useEffect(() => {
    fetchPokemon();
    // getLocal();
  }, []);

  // useEffect(() => {
  //   if(singlePokemon === null) {
  //     console.log('no pokemon');
  //   } else {
  //   console.log('pokemon', pokemon);
  //   console.log('singlePokemon', singlePokemon);
  //   }
  // }, [pokemon, singlePokemon]);

  const capitalFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // console.log(pokemon);
  console.log(singlePokemon);

  return (
    <main className="flex h-screen  items-center justify-between p-24">
      <div className="overflow-auto mr-2 bg-white text-black flex-col w-5/6 h-5/6 rounded-lg shadow-red-600 border-red-400 border-2 flex justify-center items-center shadow-md">
        {pokemon.length > 0 &&
          pokemon.map((pokemon) => (
            <div className="w-44 h-24 border-2 rounded-md flex justify-center items-center shadow-md my-4">
              <div
                className="text-bold"
                onClick={(event: any) => fetchSinglePokemon(pokemon.url)}
              >
                {capitalFirstLetter(pokemon.name)}
              </div>
            </div>
          ))}
      </div>
      <div className="overflow-auto ml-2 bg-white text-black flex-col w-5/6 h-5/6 rounded-lg shadow-red-600 border-red-400 border-2 flex justify-center items-center shadow-md">
        <IndividualPokemon pokemon={singlePokemon} />
      </div>
    </main>
  );
}
