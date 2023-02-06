import React from "react";
import "../style/App.css";

function PreviousHours({ weekly, daily, monthly, activeTimeframe }) {
  if (activeTimeframe === "daily") {
    return (
      <p className="previousHours">
        <span>Last day - </span>
        {daily.previous}hrs
      </p>
    );
  }

  if (activeTimeframe === "weekly") {
    return (
      <p className="previousHours">
        <span>Last week - </span>
        {weekly.previous}hrs
      </p>
    );
  }

  if (activeTimeframe === "monthly") {
    return (
      <p className="previousHours">
        <span>Last month - </span>
        {monthly.previous}hrs
      </p>
    );
  }
}

export default PreviousHours;
