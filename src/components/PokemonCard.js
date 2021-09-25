import axios from "axios";
import React, { useEffect, useState } from "react";
import ColorsType from "./ColorsType";
import pokeball from "../public/pokeball-white.png";
import Tabs from "./Tabs/Tabs";

export default function PokemonCard(props) {
  const [details, setDetails] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(props.pokemon.url)
      .then(({ data }) => {
        setDetails(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //   console.log(isLoading);
  let about = {};
  if (!isLoading) {
    about = {
      species: details.species.name,
      height: details.height,
      weight: details.weight,
      abilities: details.abilities,
    };
  }

  console.log(details);

  return (
    <>
      {isLoading ? (
        <div>Fetch Data</div>
      ) : (
        <div className="max-w-m rounded overflow-hidden shadow-lg">
          <div
            style={{ backgroundColor: ColorsType[details.types[0].type.name] }}
          >
            <div className="flex flex-col mx-5 pt-5">
              <p className="text-white font-bold text-3xl capitalize">
                {props.pokemon.name}
              </p>

              {details.id < 10 ? (
                <p className="text-right text-white font-bold text-lg">
                  #00{details.id}
                </p>
              ) : details.id < 99 ? (
                <p className="text-right text-white font-bold text-lg">
                  #0{details.id}
                </p>
              ) : (
                <p className="text-right text-white font-bold text-lg">
                  #{details.id}
                </p>
              )}

              <div className="flex flex-row">
                {details.types.map((type) => {
                  return (
                    <p
                      key={props.pokemon.name + type.type.name}
                      className="inline-block bg-gray-100 bg-opacity-25 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 capitalize"
                    >
                      {type.type.name}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="">
              <img
                className="w-64 mx-auto relative z-40"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`}
                alt={`pokemon images`}
              />
              <img
                className="w-44 -mt-52 ml-56 relative z-0"
                style={{
                  opacity: 0.2,
                }}
                src={`${pokeball}`}
                alt="pokeball"
              />
            </div>
          </div>
          <div className="pt-16 rounded-t-2xl">
            <Tabs about={about} stats={details.stats} />
          </div>
        </div>
      )}
    </>
  );
}
