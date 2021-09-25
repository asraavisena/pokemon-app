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

  return (
    <div className=" my-10 relative text-gray-600 lg:block mx-7 ">
      <div className="grid lg:grid-cols-4 sm:max-w-full gap-3 w-full grid-cols-2">
        {pokemons[0].map((pokemon, index) => {
          return <PokemonCard key={index + pokemon} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
}
