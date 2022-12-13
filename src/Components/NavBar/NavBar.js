import React from "react";
import { Link } from 'react-router-dom'
import "./NavBar.css";


function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img
            src="./image/famslogo.PNG"
            alt="fams-logo"
          />
        </div>
        
          <Link to="/">FAMS</Link>
          <Link to="/overview">Home</Link>
          <Link to="/register">News</Link>
       
      </div>

      <div className="navbar-right">
        <div className="profile-img">
          <img src="./image/IMG_2993.jpg" alt="profile-img" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
