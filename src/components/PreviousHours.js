import React from "react";
import "../style/App.css";

function PreviousHours({ weekly, daily, monthly, currentTimeframe }) {
  if (currentTimeframe === "daily") {
    return (
      <p className="previousHours">
        <span>Last day - </span>
        {daily.previous}hrs
      </p>
    );
  }

  if (currentTimeframe === "weekly") {
    return (
      <p className="previousHours">
        {" "}
        <span>Last week - </span>
        {weekly.previous}hrs
      </p>
    );
  }

  if (currentTimeframe === "monthly") {
    return (
      <p className="previousHours">
        {" "}
        <span>Last month - </span>
        {monthly.previous}hrs
      </p>
    );
  }
}

export default PreviousHours;
