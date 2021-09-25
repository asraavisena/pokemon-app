import React, { useState } from "react";
import MovesTab from "./Contents/MovesTab";
import StatsTab from "./Contents/StatsTab";
import AboutTab from "./Contents/AboutTab";
import EvolutionTab from "./Contents/EvolutionTab";

export default function Tabs(props) {
  const [openTab, setOpenTab] = useState("About");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className=" mb-0 list-none grid grid-cols-1  xl:grid-cols-4"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-xs font-semibold capitalize  py-3 rounded block leading-normal " +
                  (openTab === "About"
                    ? "text-black border-b-4 border-gray-600 "
                    : "text-grey-50 opacity-50 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("About");
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                About
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold capitalize px-5 py-3 rounded block leading-normal " +
                  (openTab === "Stats"
                    ? "text-black border-b-4 border-gray-600"
                    : "text-grey-50 opacity-50 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Stats");
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Base Stats
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold capitalize px-5 py-3 rounded block leading-normal " +
                  (openTab === "Evolution"
                    ? "text-black border-b-4 border-gray-600"
                    : "text-grey-50 opacity-50 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Evolution");
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Evolution
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold capitalize px-5 py-3 rounded block leading-normal " +
                  (openTab === "Moves"
                    ? "text-black border-b-4 border-gray-600"
                    : "text-grey-50 opacity-50 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Moves");
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Moves
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === "About" ? "block" : "hidden"}
                  id="link1"
                >
                  <AboutTab about={props.about} />
                </div>

                <div
                  className={openTab === "Stats" ? "block" : "hidden"}
                  id="link2"
                >
                  <StatsTab stats={props.stats} />
                </div>

                <div
                  className={openTab === "Evolution" ? "block" : "hidden"}
                  id="link3"
                >
                  <EvolutionTab />
                </div>

                <div
                  className={openTab === "Moves" ? "block" : "hidden"}
                  id="link4"
                >
                  <MovesTab moves={props.moves} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
