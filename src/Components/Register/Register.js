import "./Register.css";
import React, { useState } from "react";

const Register = () => {
  const [formField, setFormField] = useState({
    name: "",
  });
  const formFieldHandler = (e) => {
    let fieldName = e.target.name;
    let value = e.target.value;
    console.log("e.target", e.target);
    console.log("fieldName", fieldName);
    console.log("value", value);
    setFormField({ ...formField, [fieldName]: value });
  };

  return (
    <div className="register-container">
      <form className="register-form">
        <span className="register-head">Register</span>
        <div className="register-form center">
          <input
            type="text"
            name="name"
            placeholder="Firstname"
            value={formField.username}
            onChange={formFieldHandler}
            required
          />
          {formField.name}
          <input type="text" placeholder="Surname" required />

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm-Password" required />
        </div>
        <button type="submit" className="btn-submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
