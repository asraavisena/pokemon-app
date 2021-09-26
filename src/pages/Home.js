import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemons, setUrlNext, setUrlPrev } from "../store/action";

export default function Home() {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokeData: pokemons,
    error,
    url,
    prevUrl,
  } = useSelector((state) => ({
    isLoading: state.isLoading,
    error: state.error,
    pokeData: state.pokeData,
    url: state.url,
    nextUrl: state.nextUrl,
    prevUrl: state.prevUrl,
  }));

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [url]);

  if (isLoading) {
    return <p>Loading. Wait a moment</p>;
  }

  function prevButton() {
    dispatch(setUrlPrev());
  }

  function nextButton() {
    dispatch(setUrlNext());
  }
  //   console.log(pokemons);

  return (
    <div className=" my-10 relative text-gray-600 lg:block mx-7 ">
      <h1 className="text-2xl font-bold"> Pokedex</h1>
      <div className="grid lg:grid-cols-4 sm:max-w-full gap-3 w-full grid-cols-2">
        {pokemons[0].map((pokemon, index) => {
          return <PokemonCard key={index + pokemon} pokemon={pokemon} />;
        })}
      </div>
      <div className="mt-4 mx-auto flex justify-center ">
        <button
          className={`${
            !prevUrl ? "disabled:opacity-50 " : ""
          } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2`}
          disabled={!prevUrl}
          onClick={() => {
            prevButton();
          }}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={() => {
            nextButton();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
