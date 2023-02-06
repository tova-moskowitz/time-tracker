import React, { useState } from "react";
import "./style/App.css";
import allActivities from "./data/data.json";
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
  const [currentTimeframe, setCurrentTimeframe] = useState("weekly");
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
          {allActivities.map((activity) => {
            return (
              <Card
                key={activity.title}
                activityTitle={activity.title}
                iconComponent={icons[activity.title]}
                currentTimeframe={currentTimeframe}
                activity={activity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
