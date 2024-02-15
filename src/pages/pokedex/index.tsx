"use client"
import IndividualPokemon from "@/components/pokedex/IndividualPokemon";
import PokemonList from "@/components/pokedex/PokemonList";
import { useEffect, useState } from "react";
import "@/app/globals.css";

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
  }

  async function fetchSinglePokemon(url: string) {
    const res = await fetch(`${url}`);
    const data = await res.json();
    setSinglePokemon(data);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  const capitalFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
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
