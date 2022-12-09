import React from 'react';
import './App.css';
import Login from '../Login/Login'
import Register from '../Register/Register'
import NavBar from '../NavBar/NavBar'
import Piechart from '../Piechart/Piechart'

function App() {
  return (
    <div className="App-main">
    <NavBar />
    <Login />
    <Register />   
    <Piechart />
    </div>
  );
}

export default App;
