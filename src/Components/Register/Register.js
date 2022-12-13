import "./Register.css";
import React, { useEffect, useState } from "react";

const Register = () => {
  //record data
  const [formField, setFormField] = useState({});

  //check each field of data: t or f // red alert
  const [alertField, setAlertField] = useState({});

  // check all of data match to each field's condition or not
  const [validData, setValidData] = useState(false);

  const formFieldHandler = (e) => {
    let isPass = false;
    let fieldName = e.target.name;
    let value = e.target.value;
    // console.log("e.target", e.target);
    // console.log("e.target type", e.target.type);
    // console.log("e.target name", e.target.name);
    // console.log("fieldName", fieldName);

    if (
      fieldName === "email" ||
      fieldName === "password" ||
      fieldName === "confirmPassword"
    ) {
      isPass = true;
    } else {
      isPass = validateInputString(value);
    }
    console.log("isPass", isPass);
    if (isPass) {
      setAlertField({ ...alertField, [fieldName]: "pass" });
      setFormField({ ...formField, [fieldName]: value });
    } else {
      setAlertField({ ...alertField, [fieldName]: "error" });
    }
  };

  const matchPassword =
    formField.password !== undefined &&
    formField.password.trim() !== "" &&
    formField.confirmPassword !== undefined &&
    formField.confirmPassword.trim() !== "" &&
    formField.password === formField.confirmPassword;

  const validateInputString = (value) => {
    const regexAZ = new RegExp("[a-zA-Z]");
    const regexNumber = new RegExp("\\d+");
    const regexNonCharacter = new RegExp("\\W+");

    // console.log('regex', regexNumber.test(value))
    if (value.trim() === "") {
      return false;
    } else if (
      !regexAZ.test(value.trim()) ||
      regexNumber.test(value.trim()) ||
      regexNonCharacter.test(value.trim())
    ) {
      return false;
    } else return true;
  };

  function createAccount(e) {
    if (!validData) {
      return;
    }
    console.log("click create acc");

    // password must equal confirm password

    // send data to backend
  }

  useEffect(() => {
    // console.log(formField, "- Has changed");
    // console.log('matchPassword useEffect',matchPassword)

    const checkNoError =
      Object.keys(alertField).filter((key) => alertField[key] === "error")
        .length === 0;
    const checkFoundAllInput =
      Object.keys(alertField).length === 5 ? true : false;
    checkNoError && checkFoundAllInput
      ? setValidData(true)
      : setValidData(false);

    const match = matchPassword;
    setValidData(match);
    console.log("formField", formField);
    console.log("validData", validData);
  }, [formField, validData, alertField]);

  return (
    <div className="register-container">
      <form className="register-form">
        <span className="register-head">Register</span>
        <div className="register-form center">
          <input
            className={alertField.firstname}
            type="text"
            name="firstname"
            placeholder="Firstname"
            onChange={formFieldHandler}
            required
          />

          <input
            className={alertField.lastname}
            type="text"
            name="lastname"
            placeholder="Lastname"
            onChange={formFieldHandler}
            required
          />

          <input
            className={alertField.email}
            type="email"
            name="email"
            placeholder="Email"
            onChange={formFieldHandler}
            required
          />
          <input
            className={alertField.password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={formFieldHandler}
            required
            maxLength={16}
            minLength={8}
          />
          <input
            className={alertField.confirmPassword}
            type="password"
            name="confirmPassword"
            placeholder="Confirm-Password"
            onChange={formFieldHandler}
            maxLength={16}
            minLength={8}
            required
          />
        </div>
        <button type="submit" className="btn-submit" onClick={createAccount}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
