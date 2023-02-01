import "../style/App.css";

function UserProfileCard({ user }) {
  return (
    <div className="profile">
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
