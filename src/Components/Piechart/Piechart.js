import {React, useEffect, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom'
import './Piechart.css';
import ActivitySum from '../ActivitySum/ActivitySum';
import NewExercire from "../NewExercire/NewExercire";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Walk', 'Run', 'Cycling', 'Swimmimg', 'Hike', ],
  datasets: [
    {
      label: '# Time',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(134, 227, 206, 1)',
        'rgba(208, 230, 165, 1)',
        'rgba(255, 221, 148, 1)',
        'rgba(250, 137, 123, 1)',
        'rgba(204, 171, 216, 1)',
        
      ],
   
      borderWidth: 1,
    },
  ],

};
//MockUP Data
const items = [
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


function Piechart({ token }) {

  
  const [Item, setItem] = useState(items);
  const onAddNewActivity = (newActivity) => {
    setItem((prevCard) => {
      return [newActivity, ...prevCard];
    });
  };
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the token from local storage
    // const token = localStorage.getItem('token');
    // If there is no token, redirect the user to the login page
    // if (!token) {
    //   alert('Login first!')
    //   navigate('/')
    // }
   
  }, [token]);
  
    return(
        <div className="chart-data"><Pie data={data} />
        <ActivitySum cards={Item} />
        <NewExercire onAddActivity={onAddNewActivity} />
        </div>
    ) ;
  }

export default Piechart;