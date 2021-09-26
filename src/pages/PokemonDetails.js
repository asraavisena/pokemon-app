import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ColorsType from "../components/ColorsType";
import Tabs from "../components/Tabs/Tabs";

export default function PokemonDetails() {
  let history = useHistory();
  const { name } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [evolution, setEvolution] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(({ data }) => {
        setDetails(data);
        return axios.get(data.species.url);
      })
      .then(({ data }) => {
        return axios.get(data.evolution_chain.url);
      })
      .then(({ data }) => {
        setEvolution(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  let about = {};
  let evolve = {};

  if (!isLoading) {
    about = {
      species: details.species.name,
      height: details.height,
      weight: details.weight,
      abilities: details.abilities,
    };
    evolve = {
      1: evolution?.chain?.species?.name,
      2: evolution?.chain?.evolves_to[0]?.species?.name,
      3: evolution?.chain?.evolves_to[0]?.evolves_to[0]?.species?.name,
      // 4: evolution?.chain?.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species
      //   ?.name,
    };
  }

  return (
    <>
      {isLoading ? (
        <div>Fetch Data</div>
      ) : (
        <div className="sm:my-10 relative text-gray-600 lg:block sm:mx-32">
          <div className="flex flex-row my-2">
            <h1 className="text-2xl font-bold mr-auto">
              {" "}
              Pokedex{" "}
              {details.id < 10 ? (
                <span>#00{details.id}</span>
              ) : details.id < 99 ? (
                <span>#0{details.id}</span>
              ) : (
                <span>#{details.id}</span>
              )}
            </h1>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
              onClick={history.goBack}
            >
              Back
            </button>
          </div>
          <div className="max-w-lg w-full md:max-w-full lg:flex justify-center h-80">
            <div
              className="h-96 lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage: `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`,
                backgroundColor: ColorsType[details.types[0].type.name],
                backgroundSize: "75%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              title="Woman holding a mug"
            ></div>
            <div
              className="lg:h-80 w-full border-r border-b border-l border-gray-400  lg:border-l-0 lg:border-t-0 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
              style={{
                backgroundColor: ColorsType[details.types[0].type.name],
              }}
            >
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2 ">
                  <Tabs
                    about={about}
                    stats={details.stats}
                    evolutions={details.forms}
                    moves={details.moves}
                    evolve={evolve}
                    isDetails={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
