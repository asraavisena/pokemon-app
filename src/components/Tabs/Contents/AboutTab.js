import React from "react";

export default function AboutTab(props) {
  const weightInKg = +props.about.weight / 10;
  const heightInCm = +props.about.height / 10;
  // ! PERHITUNGAN DAPAT DARI SINI https://www.javatpoint.com/program-to-convert-cm-to-feet-and-inches
  const toFeet = Math.floor(heightInCm * 0.0328 * 100);
  const toInches = Math.round(heightInCm * 0.3937 * 100);
  return (
    <div className="lg:pb-16 w-full">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/3"></th>
            <th className="w-2/3 "></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-gray-400 font-semibold">Species</td>
            <td className="text-gray-600 font-semibold capitalize">
              {props.about.species}
            </td>
          </tr>
          <tr>
            <td className="text-gray-400 font-semibold">Height</td>
            <td className="text-gray-600 font-semibold">
              {toFeet}'{toInches}" ({heightInCm.toFixed(2)} cm)
            </td>
          </tr>
          <tr>
            <td className="text-gray-400 font-semibold">Weight</td>
            <td className="text-gray-600 font-semibold">
              {(+weightInKg * 2.205).toFixed(2)} lbs ({weightInKg}kg)
            </td>
          </tr>
          <tr>
            <td className="text-gray-400 font-semibold">Abilities</td>
            <td className="max-w-full">
              {props.about.abilities.map((el, index) => {
                return (
                  <span
                    className="text-gray-600 font-semibold capitalize"
                    key={index + props.about.name + el.ability.name}
                  >
                    {el.ability.name}&ensp;
                  </span>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
