import React from "react";

function NavBar() {
  return (
    <div className="navbar-container">
    <div className="navbar-left">
        <div className="navbar-logo">
        <img
            src="ExercireTrack\src\Components\image\IMG_5214.jpg"
            alt="fams-logo"
        />
        </div>
        <div className="navbar-text">
        <p>FAMS</p>
        <a href="#">Home</a>
        <a href="#">News</a>
        </div>  
    </div>

    <div className="navbar-right">
        
    </div>
    </div>
  );
}

export default NavBar;
