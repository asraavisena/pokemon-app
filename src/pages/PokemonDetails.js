import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ColorsType from "../components/ColorsType";

export default function PokemonDetails() {
  let history = useHistory();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
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

  console.log(details, "details");
  return (
    <>
      {isLoading ? (
        <div>Fetch Data</div>
      ) : (
        <div className=" my-10 relative text-gray-600 lg:block mx-7 ">
          <h1 className="text-2xl font-bold"> Pokedex</h1>

          <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center h-64">
            <div
              className="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage: `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                // backgroundColor: ColorsType[details.types[0].type.name],
              }}
              title="Woman holding a mug"
            ></div>
            <div
              className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
              style={
                {
                  // backgroundColor: ColorsType[details.types[0].type.name],
                }
              }
            >
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
          <button onClick={history.goBack}>Back</button>
        </div>
      )}
    </>
  );
}
