import React from "react";
import "../style/App.css";
import workIconSrc from "../images/icon-work.svg";
import playIconSrc from "../images/icon-play.svg";
import studyIconSrc from "../images/icon-study.svg";
import exerciseIconSrc from "../images/icon-exercise.svg";
import socialIconSrc from "../images/icon-social.svg";
import selfCareIconSrc from "../images/icon-self-care.svg";

function Icon({ icon }) {
  return <img src={icon} alt="icon" />;
}

export const WorkIcon = () => <Icon icon={workIconSrc} />;
export const PlayIcon = () => <Icon icon={playIconSrc} />;
export const StudyIcon = () => <Icon icon={studyIconSrc} />;
export const ExerciseIcon = () => <Icon icon={exerciseIconSrc} />;
export const SocialIcon = () => <Icon icon={socialIconSrc} />;
export const SelfCareIcon = () => <Icon icon={selfCareIconSrc} />;
