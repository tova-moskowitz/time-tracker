import "../style/App.css";
import React, { useState } from "react";
import SVG from "./SVG";

function Card({ title, icon }) {
  const titleClass = title.toLowerCase().replace(" ", "");
  console.log(icon);
  return (
    <div className={`card ${titleClass}`}>
      <div className="icon">
        <SVG title={title} icon={icon} />
        {/* <img src={"../images/icon-self-care.svg"} alt="" /> */}
      </div>
      <div className="title">{title}</div>
    </div>
  );
}

export default Card;

//card will have 2 divs, one on top of the other
//icon card with have background color + icon
