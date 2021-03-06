import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ColorsType from "./ColorsType";
import pokeball from "../public/pokeball-white.png";
import Tabs from "./Tabs/Tabs";
import Loading from "./Loading/Loading";

export default function PokemonCard(props) {
  const history = useHistory();
  const [details, setDetails] = useState({});
  const [evolution, setEvolution] = useState({});

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(props.pokemon.url)
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
  }, [props.pokemon]);

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
    };
  }

  function seeDetails() {
    history.push(`/pokemon-details/${details.name}`);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="rounded-xl overflow-hidden shadow-lg">
          <div
            style={{ backgroundColor: ColorsType[details.types[0].type.name] }}
            className="sm:block"
          >
            <div
              className={`sm:flex flex-col block mx-5 pt-5 md:mb-24 lg:mb-none ${
                details.types.length === 1 ? "mb-10" : "mb-2"
              }`}
            >
              <p
                className="text-white font-bold sm:text-3xl capitalize cursor-pointer"
                onClick={() => {
                  seeDetails();
                }}
              >
                {props.pokemon.name}
              </p>

              <div className="hidden sm:block ">
                {details.id < 10 ? (
                  <p className="text-right text-white font-bold text-lg">
                    #00{details.id}
                  </p>
                ) : details.id < 99 ? (
                  <p className="text-right text-white font-bold text-lg">
                    #0{details.id}
                  </p>
                ) : (
                  <p className=" text-right text-white font-bold text-lg">
                    #{details.id}
                  </p>
                )}
              </div>

              <div className="sm:flex block sm:w-0 w-2/3 flex-row">
                {details.types.map((type) => {
                  return (
                    <p
                      key={props.pokemon.name + type.type.name}
                      className="sm:inline-block bg-gray-100 bg-opacity-25 rounded-full sm:px-3 sm:py-1 sm:text-sm sm:font-semibold text-white mr-2 mb-2 sm:text-left  text-center capitalize "
                    >
                      {type.type.name}
                    </p>
                  );
                })}
              </div>
            </div>

            <div
              className="lg:w-full lg:pb-0 sm:p-none sm:pb-10 sm:m-none"
              // style={{
              //   backgroundImage: `url(${pokeball})`,
              //   backgroundColor: " rgba(0, 0, 0, 0.1)",
              //   backgroundSize: "40%",
              //   backgroundRepeat: "no-repeat",
              //   backgroundPosition: "right",
              // }}
            >
              <img
                className="lg:w-64 sm:w-44 w-16 mx-auto relative z-40"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`}
                alt={`pokemon images`}
              />
              <img
                className="object-right lg:w-44 sm:w-44 w-16 sm:-mt-52 sm:ml-56 sm:relative z-0 ml-20 -mt-14"
                style={{
                  opacity: 0.2,
                }}
                src={`${pokeball}`}
                alt="pokeball"
              />
            </div>
          </div>
          <div className="md:pt-16 rounded-t-2xl hidden lg:block">
            <Tabs
              about={about}
              stats={details.stats}
              evolutions={details.forms}
              isDetails={false}
              moves={details.moves}
              evolve={evolve}
            />
          </div>
        </div>
      )}
    </>
  );
}
