import {React, useState} from 'react';
import './App.css';
import Login from '../Login/Login'
import Register from '../Register/Register'
import NavBar from '../NavBar/NavBar'
import Piechart from '../Piechart/Piechart'
import MyProfile from '../MyProfile/MyProfile'
import { Routes , Route } from 'react-router-dom';

function App() {
  
  const [token, setToken] = useState('');

  return (
    <div className="App-main" >
      <NavBar token={token} setToken={setToken}/> 
    
      <Routes>
        <Route path="/" exact element={<Login setToken={setToken}/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/overview" element={<Piechart token={token}/>}></Route>
        <Route path="/profile" element={<MyProfile token={token}/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
