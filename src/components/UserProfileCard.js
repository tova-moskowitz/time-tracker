import "../style/App.css";
import ProfilePic from "../images/image-jeremy.png";

function UserProfileCard({ user }) {
  return (
    <div className="profile">
      <img className="profilePic" src={ProfilePic} alt="" />
      <p>Report For:</p>
      {user}
      <div className="timeframes">
        <p className="daily">Daily</p>
        <p className="weekly">Weekly</p>
        <p className="monthly">Monthly</p>
      </div>
    </div>
  );
}

export default UserProfileCard;
