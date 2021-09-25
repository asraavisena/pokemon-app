import React from "react";
import StatsTabStyles from "./Styles/StatsTab.module.css";

export default function StatsTab(props) {
  console.log(props.stats);
  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-4/12"></th>
            <th className="w-2/12 "></th>
            <th className="w-5/12 "></th>
          </tr>
        </thead>
        <tbody>
          {props.stats.map((el) => {
            return (
              <tr>
                <td>{el.stat.name}</td>
                <td>{el.base_stat}</td>
                <td className={`${StatsTabStyles.diagramm} mt-3 mx-auto`}>
                  <div
                    className={
                      (el.base_stat < 50
                        ? StatsTabStyles.left_50
                        : StatsTabStyles.left) +
                      ` ${StatsTabStyles.div_diagramm}`
                    }
                    style={{ width: el.base_stat }}
                  ></div>
                  <div
                    className={`${StatsTabStyles.right} ${StatsTabStyles.div_diagramm}`}
                    style={{ width: 100 - el.base_stat }}
                  ></div>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td className="text-gray-400 font-semibold">Species</td>
          </tr>
          <tr>
            <td className="text-gray-400 font-semibold">Height</td>
          </tr>
          <tr>
            <td className="text-gray-400 font-semibold">Weight</td>
          </tr>
          <tr>
            <td className="text-gray-400 font-semibold">Abilities</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
