import React, { useEffect } from "react";
import "../style/App.css";
import cn from "classnames";

function Timeframes({ clickHandler }) {
  return (
    <>
      <div className="timeframes">
        <p
          onClick={() => {
            clickHandler("daily");
          }}
          // className={cn("daily", {
          //   active: 1 > 2,
          // })}
        >
          Daily
        </p>
        <p
          onClick={() => {
            clickHandler("weekly");
          }}
          className="weekly"
        >
          Weekly
        </p>
        <p
          onClick={() => {
            clickHandler("monthly");
          }}
          className="monthly"
        >
          Monthly
        </p>
      </div>
    </>
  );
}

export default Timeframes;
