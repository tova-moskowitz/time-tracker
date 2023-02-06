import React from "react";
import "../style/App.css";

function CurrentHours({ timeframes, title }) {
  return timeframes.map((timeframe) => {
    if (timeframe.title === title) {
      return (
        <p key={title} className="currentHours">
          {timeframe.timeframes.weekly.current}hrs
        </p>
      );
    }
  });
}

export default CurrentHours;
