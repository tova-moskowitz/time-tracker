import "../style/App.css";
import React from "react";
import CurrentHours from "./CurrentHours";
import PreviousHours from "./PreviousHours";

function Card({ iconComponent, activity, activeTimeframe }) {
  const { title, timeframes } = activity;
  const { daily, weekly, monthly } = timeframes;

  const titleClass = title.toLowerCase().replace(" ", "");
  const Icon = iconComponent;

  return (
    <div className={`card ${titleClass}`}>
      <div className="icon">
        <Icon />
      </div>
      <div className="title">
        <p className="titleName">{title}</p>
        <div className="hours"></div>
        <CurrentHours
          activeTimeframe={activeTimeframe}
          weekly={weekly}
          daily={daily}
          monthly={monthly}
        />
        <PreviousHours
          activeTimeframe={activeTimeframe}
          weekly={weekly}
          daily={daily}
          monthly={monthly}
        />
      </div>
    </div>
  );
}

export default Card;
