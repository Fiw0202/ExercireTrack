import {React, useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom'
import './Piechart.css';

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

function Piechart({ token }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the token from local storage
    // const token = localStorage.getItem('token');
    // If there is no token, redirect the user to the login page
    if (!token) {
      alert('Login first!')
      navigate('/')
    }

  }, [token]);
  
    return(
        <div className="chart-data"><Pie data={data} /></div>
    ) ;
  }

export default Piechart;