import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemons } from "../store/action";

export default function Home() {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokeData: pokemons,
    error,
    url,
  } = useSelector((state) => ({
    isLoading: state.isLoading,
    error: state.error,
    pokeData: state.pokeData,
    url: state.url,
  }));

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [url]);

  console.log(pokemons.url);

  if (isLoading) {
    return <p>Loading. Wait a moment</p>;
  }

  //   console.log(pokemons[0], "list");

  //   console.log(pokemons);

  return (
    <div className=" my-10 relative text-gray-600 lg:block hidden mx-40">
      <div className="grid grid-cols-4 max-w-full gap-3">
        {pokemons[0].map((pokemon, index) => {
          return <PokemonCard key={index + pokemon} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
}
