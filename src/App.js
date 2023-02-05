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
  const [currentTimeframe, setCurrentTimeframe] = useState("daily");
  const icons = {
    Work: WorkIcon,
    Play: PlayIcon,
    Study: StudyIcon,
    Exercise: ExerciseIcon,
    Social: SocialIcon,
    "Self Care": SelfCareIcon,
  };

  const clickHandler = (e) => {
    setCurrentTimeframe(e.target.className);
    // e.target.classList.add("active");
  };

  return (
    <div className="App">
      <header> {user}'s Time Tracker</header>
      <div className="wrapper">
        <UserProfileCard clickHandler={clickHandler} user={user} />
        <div className="cards">
          {data.map((type) => {
            return (
              <Card
                title={type.title}
                iconComponent={icons[type.title]}
                currentTimeframe={currentTimeframe}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
