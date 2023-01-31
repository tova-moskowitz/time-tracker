import "../style/App.css";

function UserProfileCard({ user }) {
  return (
    <div className="profile">
      <p>Report For:</p>
      {user}
    </div>
  );
}

export default UserProfileCard;
