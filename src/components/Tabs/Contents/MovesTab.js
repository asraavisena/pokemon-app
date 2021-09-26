import React from "react";

export default function MovesTab(props) {
  return (
    <div className="lg:pb-12 grid grid-cols-2">
      {props.moves.slice(0, 10).map((el, index) => {
        return (
          <p
            key={index + el.move.name}
            className="text-gray-400 font-semibold "
          >
            {el.move.name}
          </p>
        );
      })}
      <div></div>
      {/* <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/2"></th>
            <th className="w-1/2 "></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-gray-400 font-semibold">Species</td>
            <td className="text-gray-600 font-semibold capitalize"></td>
          </tr>
          <tr>
            <td className="text-gray-400 font-semibold">Height</td>
            <td className="text-gray-600 font-semibold"></td>
          </tr>
          <tr>
            <td className="text-gray-400 font-semibold">Weight</td>
            <td className="text-gray-600 font-semibold"></td>
          </tr>
          <tr>
            <td className="text-gray-400 font-semibold">Abilities</td>
            <td className="max-w-full"></td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}
