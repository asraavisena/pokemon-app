import React from "react";
import StatsTabStyles from "./Styles/StatsTab.module.css";

export default function StatsTab(props) {
  return (
    <div className="">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-6/12"></th>
            <th className="w-2/12"></th>
            <th className="w-5/12 "></th>
          </tr>
        </thead>
        <tbody>
          {props.stats.map((el, index) => {
            return (
              <tr key={index + el.base_stat + el.stat.name}>
                <td className="lg:text-sm xl:text-base text-gray-400 font-semibold capitalize">
                  {el.stat.name}
                </td>
                <td className="text-gray-600 font-semibold">{el.base_stat}</td>
                <td
                  className={`${StatsTabStyles.diagramm} mt-2 mx-auto w-full`}
                >
                  <div
                    className={
                      (el.base_stat < 50
                        ? StatsTabStyles.left_50
                        : StatsTabStyles.left) +
                      ` ${StatsTabStyles.div_diagramm}`
                    }
                    style={{ width: el.base_stat + 20 }}
                  ></div>
                  <div
                    className={`${StatsTabStyles.right} ${StatsTabStyles.div_diagramm}`}
                    style={{ width: 100 - el.base_stat + 20 }}
                  ></div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
