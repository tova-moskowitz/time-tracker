import React, { useState, useEffect } from "react";
import "./style/App.css";
import data from "./data/data.json";
import Card from "./components/Card";
import UserProfileCard from "./components/UserProfileCard";
import { WorkIcon } from "./components/SVG";

function App() {
  const [user, setUser] = useState("Tova");
  const icons = {
    // Work: <WorkIcon />,
    // Play: <PlayIcon />,
    Work: require("./images/icon-work.svg").default,
    Play: require("./images/icon-play.svg").default,
    Study: require("./images/icon-study.svg").default,
    Exercise: require("./images/icon-exercise.svg").default,
    Social: require("./images/icon-social.svg").default,
    "Self Care": require("./images/icon-self-care.svg").default,
  };

  return (
    <div className="App">
      <header> {user}'s Time Tracker</header>
      <div className="wrapper">
        <div className="profileCard">
          <UserProfileCard user={user} />
          <div className="timeframes">
            <p className="daily">Daily</p>
            <p className="weekly">Weekly</p>
            <p className="monthly">Monthly</p>
          </div>
        </div>
        <div className="cards">
          {data.map((type) => {
            return <Card title={type.title} icon={icons[type.title]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

/* 
- header
- flexbox with: user profile flexbox, and cards grid
- flexbox with: UserProfileCard and timeframes list (column)
- grid with all the cards in it
*/
