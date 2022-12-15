import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src="./image/famslogo.PNG" alt="fams-logo" />
        </div>

        <span>FAMS</span>
        <Link to="/overview">Home</Link>
        <Link to="#">News</Link>
      </div>

      <div className="navbar-right">
        <div className="switch-link">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <div >
        <Link to="/">
        <img className="profile-img" src="./image/IMG_2993.jpg" alt="profile-img" />
        </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
