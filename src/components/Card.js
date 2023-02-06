import "../style/App.css";
import React from "react";
import CurrentHours from "./CurrentHours";
import PreviousHours from "./PreviousHours";

function Card({ title, iconComponent, timeframes }) {
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
        <CurrentHours timeframes={[timeframes]} title={title} />
        <PreviousHours timeframes={[timeframes]} title={title} />
      </div>
    </div>
  );
}

export default Card;
