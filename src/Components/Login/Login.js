import React, { useEffect, useState } from "react";
import "./Login.css";
import { baseUrl, getRequestOption, sendRequest } from "../../store";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [loginField, setLoginField] = useState({});
  const [validData, setValidData] = useState(false);
  const [alertField, setAlertField] = useState({});

  const LoginHandler = (e) => {
    // console.log('e.target.name', e.target.name)

    let fieldName = e.target.name;
    let value = e.target.value;

    setLoginField({ ...loginField, [fieldName]: value });

    if (validData === true) {
      setAlertField({ ...alertField, [fieldName]: "pass" });
      setLoginField({ ...loginField, [fieldName]: value });
    } else {
      setAlertField({ ...alertField, [fieldName]: "error" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email
    if (!loginField.email.includes("@")) {
      // Display an error message
      alert("invalid email");
      return;
    }

    // Validate password
    if (loginField.password.length < 8 || loginField.password.length > 16) {
      // Display an error message
      alert("invalid password");
      return;
    }
    const data = {
      email: loginField.email,
      password: loginField.password,
    };
    const url = `${baseUrl}user/login`;
    const settings = getRequestOption("POST", data, "");
    const res = await sendRequest(url, settings);
    console.log('login res', res)
    checkLogin(res)
  };

  function checkLogin(data) {
    if (data.result === "login complete") {
      const JWTtoken = data.token;
      console.log("JWTtoken", JWTtoken);
      if (JWTtoken) {
        localStorage.setItem("token", JWTtoken);
        setToken(JWTtoken);
      }

      // Navigate to the home page
      navigate("/overview");
    } else {
      console.log("caanot login");
      alert(data.error);
    }
  }
  useEffect(() => {
    // console.log('loginField', loginField)
    if (loginField.password === undefined) {
      setValidData(false);
    } else if (loginField.password.trim() === "") {
      setValidData(false);
    } else {
      setValidData(true);
    }
    localStorage.removeItem("token");

    console.log("validData", validData);
  }, [loginField, validData]);

  return (
    <div className="login-container">
      <form>
        <span className="login-head">Login</span>
        <div className="form-login center">
          <input
            type="email"
            name="email"
            placeholder="Username"
            onChange={LoginHandler}
            required
          />
        </div>
        <div className="form-login center">
          <input
            type="password"
            name="password"
            placeholder="Password"
            maxLength={16}
            minLength={8}
            onChange={LoginHandler}
            required
          />
        </div>
        <div className="login-button center">
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
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
