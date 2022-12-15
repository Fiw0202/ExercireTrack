import "./ActivitySum.css";
const Activity = (props) => {
  const { activity, date, time, sets, distance, calories } = props;

  return (
    <div className="activity">
      <div className="activity-items">
        <h3>Running{activity}</h3>
        <div className="activity-list">
          <ul className="ul-right">
            <li>Date</li>
            <li>time </li>
            <li>Number of sets </li>
            <li>distance </li>
            <li>calories </li>
          </ul>
          <ul className="ul-left">
            <li>12/14/2568{date}</li>
            <li>10.23{time}</li>
            <li>6{sets}</li>
            <li>330 m.</li>
            <li>2000 cal</li>
          </ul>
        </div>
      </div>

      <div className="activity-items">
        <h3>Running</h3>
        <div className="activity-list">
          <ul className="ul-right">
            <li>Date</li>
            <li>time </li>
            <li>sets </li>
            <li>distance </li>
            <li>calories </li>
          </ul>
          <ul className="ul-left">
            <li>12/14/2568</li>
            <li>10.23</li>
            <li>6</li>
            <li>330 m.</li>
            <li>2000 cal</li>
          </ul>
        </div>
      </div>

      <div className="activity-items">
        <h3>Running</h3>
        <div className="activity-list">
          <ul className="ul-right">
            <li>Date</li>
            <li>time </li>
            <li>sets </li>
            <li>distance </li>
            <li>calories </li>
          </ul>
          <ul className="ul-left">
            <li>12/14/2568</li>
            <li>10.23</li>
            <li>6</li>
            <li>330 m.</li>
            <li>2000 cal</li>
          </ul>
        </div>
      </div>
      <div className="add-exercise-btn" title="Add New Exercise">
      <div className="circle">
            <h2>+</h2>
        </div>
      </div>
    </div>
  );
  {
    /*<ul><h3>{activity}</h3>
<li>{date}</li>
<li>{time}</li>
<li>{sets}</li>
<li>{distance}</li>
<li>{calories}</li>
</ul>*/
  }
};
export default Activity;
