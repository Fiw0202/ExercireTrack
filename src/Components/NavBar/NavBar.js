import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { baseUrl, getRequestOption, sendRequest } from "../../store";

function NavBar({ token }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Fetch the token from local storage
    // const token = localStorage.getItem('token');
    console.log("nav token", token);
    // If there is no token, redirect the user to the login page
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  
  async function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    
    const settings = getRequestOption('DELETE', null, token)
    const url = `${baseUrl}user/logout`
    const res = await sendRequest(url, settings)
    console.log('res', res)
    
    navigate("/");
  }

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src="./image/famslogo.PNG" alt="fams-logo" />
        </div>

        <span>FAMS</span>
        {isLoggedIn && <Link className="profile-btn" to="/overview">Home</Link>}
        {isLoggedIn && <Link className="profile-btn" to="#">News</Link>}
        </div>
        
        <div className="navbar-right">
        <div className="switch-link">
        {!isLoggedIn && <Link className="profile-btn" to="/">Login</Link>}
        {!isLoggedIn && <Link className="profile-btn" to="/register">Register</Link>}
        </div>
        <div className="profile-picture-container">
        {isLoggedIn && <Link className="profile-btn" to="/profile">Profile</Link>}
          {isLoggedIn && (
            <div className="logoutButton" onClick={handleLogout}>
              Logout
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default NavBar;
