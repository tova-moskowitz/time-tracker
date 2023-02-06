import React from "react";
import "../style/App.css";
import cn from "classnames";

function Timeframes({ clickHandler, activeTimeframe }) {
  return (
    <>
      <div className="timeframes">
        <p
          onClick={() => {
            clickHandler("daily");
          }}
          className={cn("daily", {
            active: activeTimeframe === "daily",
          })}
        >
          Daily
        </p>
        <p
          onClick={() => {
            clickHandler("weekly");
          }}
          className={cn("weekly", {
            active: activeTimeframe === "weekly",
          })}
        >
          Weekly
        </p>
        <p
          onClick={() => {
            clickHandler("monthly");
          }}
          className={cn("monthly", {
            active: activeTimeframe === "monthly",
          })}
        >
          Monthly
        </p>
      </div>
    </>
  );
}

export default Timeframes;
