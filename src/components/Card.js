import "../style/App.css";
import React from "react";
import CurrentHours from "./CurrentHours";
import PreviousHours from "./PreviousHours";

function Card({ activityTitle, iconComponent, activity, currentTimeframe }) {
  const titleClass = activityTitle.toLowerCase().replace(" ", "");
  const Icon = iconComponent;

  return (
    <div className={`card ${titleClass}`}>
      <div className="icon">
        <Icon />
      </div>
      <div className="title">
        <p className="titleName">{activityTitle}</p>
        <div className="hours"></div>
        <CurrentHours
          currentTimeframe={currentTimeframe}
          weekly={activity.timeframes.weekly}
          daily={activity.timeframes.daily}
          monthly={activity.timeframes.monthly}
        />
        <PreviousHours
          currentTimeframe={currentTimeframe}
          weekly={activity.timeframes.weekly}
          daily={activity.timeframes.daily}
          monthly={activity.timeframes.monthly}
        />
      </div>
    </div>
  );
}

export default Card;
