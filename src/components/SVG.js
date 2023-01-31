import "../style/App.css";
import React from "react";
import workIconSrc from "../images/icon-work.svg";
import playIconSrc from "../images/icon-play.svg";
import studyIconSrc from "../images/icon-study.svg";
import exerciseIconSrc from "../images/icon-exercise.svg";
import socialIconSrc from "../images/icon-social.svg";
import selfCareIconSrc from "../images/icon-self-care.svg";

function SVG({ icon }) {
  console.log({ workIconSrc });
  return <img src="../images/icon-work.svg" alt="icon" />;
}

export default SVG;

export const WorkIcon = () => <SVG icon={workIconSrc} />;
export const PlayIcon = () => <SVG icon={playIconSrc} />;
export const StudyIcon = () => <SVG icon={studyIconSrc} />;
export const ExerciseIcon = () => <SVG icon={exerciseIconSrc} />;
export const SocialIcon = () => <SVG icon={socialIconSrc} />;
export const SelfCareIcon = () => <SVG icon={selfCareIconSrc} />;
