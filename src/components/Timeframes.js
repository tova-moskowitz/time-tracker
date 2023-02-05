import "../style/App.css";

function Timeframes({ clickHandler }) {
  return (
    <>
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
    </>
  );
}

export default Timeframes;
