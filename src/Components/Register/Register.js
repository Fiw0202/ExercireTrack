import "./Register.css";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../store";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
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

  const requestPost = async (url, body) => {
    const settings = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const fetchResponse = await fetch(url, settings);
      const data = await fetchResponse.json();
      
      return data;
    } catch (error) {
      return error;
    }
  };
  async function createAccount(e) {
    if (!validData) {
      return alert("Invalid data.");
    }
    const data = {
      email: formField.email,
      password: formField.password,
      firstname: formField.firstname,
      lastname: formField.lastname,
    };
    console.log("click create acc", data);

    const url = `${baseUrl}user/register`;
    
    const res = await requestPost(url, data);
    if (res.status===201 && res.result==="complete") {
      alert('Register complete')
      navigate('/')
    }else if (res.status===400) {
      alert(`${res.name} error:${res.error}`)
    }

    // console.log("res", res);
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
    // console.log("formField", formField);
    // console.log("validData", validData);
  }, [formField, validData, alertField]);

  return (
    <div className="register-container">
      <div className="register-form-container">
      <div className="register-form center">
      <span className="register-head">Register</span>
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
          <button className="btn-submit" onClick={createAccount}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
