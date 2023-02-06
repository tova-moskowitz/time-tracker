import "../style/App.css";

function PreviousHours({ timeframes, title }) {
  return timeframes.map((timeframe) => {
    if (timeframe.title === title) {
      return (
        <p key={title} className="previousHours">
          <span>Last Week - </span>
          {timeframe.timeframes.weekly.previous}hrs
        </p>
      );
    }
  });
}

export default PreviousHours;
