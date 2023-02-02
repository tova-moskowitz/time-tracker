import React, { useState, useEffect } from "react";
import "./style/App.css";
import data from "./data/data.json";
import Card from "./components/Card";
import UserProfileCard from "./components/UserProfileCard";
import {
  WorkIcon,
  PlayIcon,
  StudyIcon,
  ExerciseIcon,
  SocialIcon,
  SelfCareIcon,
} from "./components/Icons";

function App() {
  const [user, setUser] = useState("Jeremy Robson");
  const icons = {
    Work: WorkIcon,
    Play: PlayIcon,
    Study: StudyIcon,
    Exercise: ExerciseIcon,
    Social: SocialIcon,
    "Self Care": SelfCareIcon,
  };

  return (
    <div className="App">
      <header> {user}'s Time Tracker</header>
      <div className="wrapper">
        <div className="profileCard">
          <UserProfileCard user={user} />
        </div>
        <div className="cards">
          {data.map((type) => {
            return (
              // <p>HELLO</p>
              <Card title={type.title} iconComponent={icons[type.title]} />
            );
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
