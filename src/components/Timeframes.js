import React, { useState } from "react";
import "../style/App.css";
import cn from "classnames";

function Timeframes({ clickHandler }) {
  const [activeTimeframe, setActiveTimeframe] = useState("weekly");
  return (
    <>
      <div className="timeframes">
        <p
          onClick={() => {
            clickHandler("daily");
            setActiveTimeframe("daily");
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
            setActiveTimeframe("weekly");
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
            setActiveTimeframe("monthly");
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
