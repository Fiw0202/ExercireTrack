import "./App.css";
import Piechart from "../Piechart/Piechart";
import MyProfile from "../MyProfile/MyProfile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NewExercire from "../NewExercire/NewExercire";
import ActivitySum from "../ActivitySum/ActivitySum";
import { useState } from "react";
import ActivityContext from "../../Data/ActivityContext";

function App() {
  //MockUP Data
  const data = [
    {
      id: 1,
      activity: "Running",
      date: "12/12/2565",
      time: "12.00 น.",
      sets: 6,
      distance: " 10 ",
      calories: "2000",
    },
    {
      id: 2,
      activity: "Walking",
      date: "12/12/2565",
      time: "18.00 น.",
      sets: 3,
      distance: " 1 ",
      calories: "200",
    },
    {
      id: 3,
      activity: "Bicycling",
      date: "12/12/2565",
      time: "12.00 น.",
      sets: 6,
      distance: " 10 ",
      calories: "2000",
    },
    {
      id: 4,
      activity: "Swimming",
      date: "12/12/2565",
      time: "12.00 น.",
      sets: 6,
      distance: " 10 ",
      calories: "2000",
    },
    {
      id: 5,
      activity: "Hiking",
      date: "12/12/2565",
      time: "12.00 น.",
      sets: 6,
      distance: " 10 ",
      calories: "2000",
    },
  ];

  const [item, setItem] = useState(data);
  const onAddNewActivity = (newActivity) => {
    setItem((prevCard) => {
      return [newActivity, ...prevCard];
    });
  };

  return (
    <div className="App">
      <ActivityContext.Provider value={"ActivityContext"}>
        <ActivitySum cards={item} />
        <NewExercire onAddActivity={onAddNewActivity} />
      </ActivityContext.Provider>

      {/*<MyProfile/>*/}

      <Login />
      <Register />
      <Piechart />
    </div>
  );
}
export default App;
