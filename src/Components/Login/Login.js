import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form>
        <span className="login-head">Login</span>
        <div className="form-login center">
          <input type="email" placeholder="Username" required/>
        </div>
        <div className="form-login center">
          <input type="password" placeholder="Password" required/>
        </div>
        <div className="login-button center">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

// <div className="login-checkbox">
//     <label className="checkbox">
//         <input type="checkbox" />Remember me</label>
// </div>
