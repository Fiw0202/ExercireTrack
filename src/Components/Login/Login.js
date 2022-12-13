import React, { useEffect, useState } from "react";
import "./Login.css";

const Login = () => {
  const [loginField, setLoginField] = useState({});
  const [validData, setValidData] = useState(false);
  const [alertField, setAlertField] = useState({});

  const LoginHandler = (e) => {
    // console.log('e.target.name', e.target.name)

    let fieldName = e.target.name
    let value = e.target.value
    
    setLoginField({...loginField,[fieldName]:value})
    
    if (validData === true) {
      setAlertField({ ...alertField, [fieldName]: "pass" });
      setLoginField({ ...loginField, [fieldName]: value });
    } else {
      setAlertField({ ...alertField, [fieldName]: "error" });
    }
    
  } 
  
  useEffect(() => {
    // console.log('loginField', loginField)
    if (loginField.password === undefined ) {     
      setValidData(false)
    }
    else if (loginField.password.trim() === "") {     
      setValidData(false)
    }else {
      setValidData(true)
    }

    console.log(validData)

  }, [loginField, validData])

  return (
    <div className="login-container">
      <form>
        <span className="login-head">Login</span>
        <div className="form-login center">
          <input type="email" name="email" placeholder="Username" onChange={LoginHandler} required />
        </div>
        <div className="form-login center">
          <input type="password" name="password" placeholder="Password" maxLength={16} minLength={8} onChange={LoginHandler} required />
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
