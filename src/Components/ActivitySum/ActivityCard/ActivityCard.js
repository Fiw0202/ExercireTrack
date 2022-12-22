import "./ActivityCard.css";
import PropTypes from "prop-types";

const ActivityCard = (props) => {
  const { activity, date, time, sets, distance, calories } = props;

  //กำหนดเงื่อนไขสีพื้นหลัง
  let activitycard;
  if (activity === "Running") {
    activitycard = "Running";
  } else if (activity === "Walking") {
    activitycard = "Walking";
  } else if (activity === "Bicycling") {
    activitycard = "Bicycling";
  } else if (activity == "Swimming") {
    activitycard = "Swimming";
  } else if (activity === "Hiking") {
    activitycard = "Hiking";
  }

  return (
    <div className="activity">
      <div className={activitycard}>
        <h3>{activity}</h3>
        <div className="activity-list">
          <ul className="ul-right">
            <li>Date</li>
            <li>time </li>
            <li>Number of sets </li>
            <li>distance() </li>
            <li>calories </li>
          </ul>
          <ul className="ul-left">
            <li>{date}</li>
            <li>{time}</li>
            <li>{sets}</li>
            <li>{distance} m.</li>
            <li>{calories}</li>
          </ul>
        </div>
        <div className="update-btn">
          <p title="Delete">Delete</p>
          <p title="Edit">Edit</p>
        </div>
      </div>
    </div>
  );
};
ActivityCard.prototype = {
  activity: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  sets: PropTypes.number,
  distance: PropTypes.number,
  calories: PropTypes.number.isRequired,
};
export default ActivityCard;
