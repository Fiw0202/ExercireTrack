import "./NewExercire.css";
import ActivityContext from "../../Data/ActivityContext";
import { useState,useContext } from "react";
import { v4 as uuidv4 } from 'uuid';

//สร้าง Props 
const NewExercire = () => {
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [sets, setSets] = useState();
  const [distance, setDistance] = useState();
  const [calories, setCalories] = useState();


  //สร้าง Event
  const { addActivity } = useContext(ActivityContext)
  const inputActivity = (event) => {
    setActivity(event.target.value);
  };
  const inputDate = (event) => {
    setDate(event.target.value);
  };
  const inputTime = (event) => {
    setTime(event.target.value);
  };
  const inputSets = (event) => {
    setSets(event.target.value);
  };
  const inputDistance = (event) => {
    setDistance(event.target.value);
  };
  const inputCalories = (event) => {
    setCalories(event.target.value);
  };

  const saveExercise = (event) => {
    event.preventDefault()
    const cardActivity = {
      id:uuidv4(),
      activity: activity,
      date: date,
      time: time,
      sets: Number(sets),
      distance: Number(distance),
      calories: Number(calories),
    };
    addActivity(cardActivity)
    setActivity('')
    setDate()
    setTime()
    setSets()
    setDistance()
    setCalories()
  };

  return (
    <div className="add-exercise">
      <h1>New Exercire</h1>
      <form className="newex-form" onSubmit={saveExercise}>
        <div className="formEx">
        <div className="section-form">
          <p>Activity</p>
          <p>Date</p>
          <p>Time</p>
          <p>Number of sets</p>
          <p>Distance</p>
          <p>Calories Burned</p>
        </div>
        <div className="input-action">
          <select onChange={inputActivity}>
            <option value={activity}></option>
            <option value="Running">Running</option>
            <option value="Walking">Walking</option>
            <option value="Bicycling">Bicycling</option>
            <option value="Swimming">Swimming</option>
            <option value="Hiking">Hiking</option>
          </select>
          <input type="date" onChange={inputDate} value={date} ></input>
          <input
            type="time"
            placeholder="Activity"
            onChange={inputTime}
          value={time}></input>
          <input
            type="text"
            placeholder="Optional"
            onChange={inputSets} value={sets}
          ></input>
          <input
            type="text"
            placeholder="Optional"
            onChange={inputDistance} value={distance}
          ></input>
          <input
            type="text"
            placeholder="Require"
            onChange={inputCalories} value={calories}
          ></input>
        </div>
        </div>
        <div className="submit-btn">
        <button type="submit" className="btn-save" title='Save' >
          Save
        </button>
        </div>
      </form>
    </div>
  );
};
export default NewExercire;
