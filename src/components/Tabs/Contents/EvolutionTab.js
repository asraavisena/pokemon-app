import React from "react";
import { useHistory } from "react-router-dom";

export default function EvolutionTab(props) {
  const history = useHistory();
  function seeDetails(name) {
    history.push(`/pokemon-details/${name}`);
  }

  return (
    <div className="lg:pb-16 w-full">
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-1/3"></th>
            <th className="w-2/3"></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props?.evolve)?.map((key, index) => {
            return (
              <tr key={index + props.evolve[key]}>
                <td className="text-gray-400 font-semibold">Species {key}</td>
                <td
                  onClick={() => {
                    seeDetails(props.evolve[key]);
                  }}
                  className="text-gray-600 font-semibold capitalize cursor-pointer"
                >
                  {props.evolve[key]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
