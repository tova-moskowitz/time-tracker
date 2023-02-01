import "../style/App.css";
import React, { useState } from "react";

function Card({ title, iconComponent }) {
  const titleClass = title.toLowerCase().replace(" ", "");
  const Icon = iconComponent;

  return (
    <div className={`card ${titleClass}`}>
      <div className="icon">
        <Icon />
      </div>
      <div className="title">
        {title}
        <div className="hours">
          <p className="currentHours">10hrs</p>
          <p className="previousHours">Last Week: 2hrs</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

//card will have 2 divs, one on top of the other
//icon card with have background color + icon
