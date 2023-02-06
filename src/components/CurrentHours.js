import React from "react";
import "../style/App.css";

function CurrentHours({ weekly, daily, monthly, currentTimeframe }) {
  if (currentTimeframe === "daily") {
    return <p className="currentHours">{daily.current}hrs</p>;
  }

  if (currentTimeframe === "weekly") {
    return <p className="currentHours">{weekly.current}hrs</p>;
  }

  if (currentTimeframe === "monthly") {
    return <p className="currentHours">{monthly.current}hrs</p>;
  }
}

export default CurrentHours;
