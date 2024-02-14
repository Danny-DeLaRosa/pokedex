import IndividualPokemon from "@/components/pokedex/IndividualPokemon";
import PokemonList from "@/components/pokedex/PokemonList";
import { useEffect, useState } from "react";

type Pokemon = {
  name: string;
  url: string;
};

const Pokedex = () => {
    
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
  // console.log(singlePokemon);
  return (
    <main className="flex h-screen  items-center justify-between p-24">
      <PokemonList
        pokemon={pokemon}
        fetchSinglePokemon={fetchSinglePokemon}
        capitalFirstLetter={capitalFirstLetter}
      />
      <IndividualPokemon pokemon={singlePokemon} />
    </main>
  );
};

export default Pokedex;
