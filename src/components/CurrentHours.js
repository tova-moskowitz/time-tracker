import React from "react";
import "../style/App.css";

function CurrentHours({ weekly, daily, monthly, activeTimeframe }) {
  if (activeTimeframe === "daily") {
    return <p className="currentHours">{daily.current}hrs</p>;
  }

  if (activeTimeframe === "weekly") {
    return <p className="currentHours">{weekly.current}hrs</p>;
  }

  if (activeTimeframe === "monthly") {
    return <p className="currentHours">{monthly.current}hrs</p>;
  }
}

export default CurrentHours;
