import React from "react";
import LoadingStyle from "./Loading.module.css";

export default function Loading() {
  return (
    <div className="mx-auto items-center flex justify-center">
      <div className={`${LoadingStyle.Lds_roller}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
