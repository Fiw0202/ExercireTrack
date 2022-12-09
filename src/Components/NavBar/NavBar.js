import React from "react";
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
        
          <span>FAMS</span>
          <a href="./#">Home</a>
          <a href="./#">News</a>
       
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
