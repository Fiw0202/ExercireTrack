import {React, useState} from 'react';
import './App.css';
import Login from '../Login/Login'
import Register from '../Register/Register'
import NavBar from '../NavBar/NavBar'
import Piechart from '../Piechart/Piechart'
import MyProfile from '../MyProfile/MyProfile'
import NewExercire from "../NewExercire/NewExercire";
import ActivitySum from "../ActivitySum/ActivitySum";
import ActivityContext from "../../Data/ActivityContext";
import { Routes , Route } from 'react-router-dom';


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
  
  const [token, setToken] = useState('');

  return (

    <div className="App-main" >
      <NavBar token={token} setToken={setToken}/> 
    
      <Routes>
     
        <Route path="/" exact element={<Login setToken={setToken}/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/overview" element={<Piechart token={token}/>}></Route>
        <Route path="/profile" element={<MyProfile token={token}/>}></Route>
        <ActivityContext.Provider value={"ActivityContext"}>
        <Route path="/activitycard" element={<ActivitySum cards={item} token={token}/>}></Route>
        <NewExercire onAddActivity={onAddNewActivity} />
        </ActivityContext.Provider>
      
      </Routes>
    </div>
  );
}

export default App;
