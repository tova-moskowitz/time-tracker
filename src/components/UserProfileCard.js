import "../style/App.css";
import ProfilePic from "../images/image-jeremy.png";

function UserProfileCard({ user, clickHandler }) {
  return (
    <>
      <div className="profileWrapper">
        <div className="profile">
          <img className="profilePic" src={ProfilePic} alt="" />
          <p>Report For </p>
          <span className="userName">{user}</span>
        </div>
        <div className="timeframes">
          <p onClick={clickHandler} className="daily">
            Daily
          </p>
          <p onClick={clickHandler} className="weekly">
            Weekly
          </p>
          <p onClick={clickHandler} className="monthly">
            Monthly
          </p>
        </div>
      </div>
    </>
  );
}

export default UserProfileCard;
