import React from 'react';
import './App.css';
import Login from '../Login/Login'
import Register from '../Register/Register'
import NavBar from '../NavBar/NavBar'
import Piechart from '../Piechart/Piechart'
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App-main">
      <NavBar />
    
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/overview" element={<Piechart />}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
