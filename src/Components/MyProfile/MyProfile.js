import { React, useState, useEffect } from "react";
import { baseUrl, getRequestOption, sendRequest } from "../../store";
import "./MyProfile.css";
import { useNavigate } from 'react-router-dom'

export default function ProfilePage({ token }) {
  const navigate = useNavigate()
  const [response, setRes] = useState({});
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    DOB: "",
    weight: "",
    height: "",
    gender: "",
    profilePicture: "",
    email: "",
  });
  const [bmi, setBmi] = useState(0);
  useEffect(()=>{
    if (!token) {
      navigate('/')
    }
  }, [token])
  useEffect(() => {
    getProfileDetail().then((res) => {
      setRes(res);
      console.log("res", res.data);
      if (res.result === "complete") {
        setFormValues({
          ...formValues,
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          weight: res.data.weight,
          height: res.data.height,
          gender: res.data.gender || "o",
          DOB: res.data.DOB,
          nickname: "",
          email: res.data.email,
        });
        console.log("get firstname", formValues.firstname);
      }
    });
  }, []);

  async function getProfileDetail() {
    const settings = getRequestOption("GET", null, token);
    const url = `${baseUrl}user/`;
    const res = await sendRequest(url, settings);
    console.log("get profile datares", res);
    return res;
  }

  // State to store the form values

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    // Perform form submission logic here, using the formValues state
    console.log("formValues", formValues, event);
    const url = `${baseUrl}user/profile`;
    const updateOption = getRequestOption("PUT", formValues, token);
    const res = await sendRequest(url, updateOption);
    console.log("res", res);
  }

  // Function to handle input changes
  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    setBmi(calculateBMI());
  }

  function calculateBMI() {
    return parseFloat(
      formValues.weight / ((formValues.height * formValues.height) / 100)
    ).toFixed(2);
  }

  return (
    <div className="profile-container">
      <form classname="profile-form" onSubmit={handleSubmit}>
        <span className="profile-head">Personal Information</span>
        <br />
        <div className="profile-block">
          <label htmlFor="firstname">First name:</label>
          <input
            type="text"
            placeholder="Firstname"
            name="firstname"
            id="firstname"
            value={formValues.firstname}
            onChange={handleChange}
            className="profile-input"
          />
        </div>
        <div className="profile-block">
          <label htmlFor="lastname">Last name:</label>
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            id="lastname"
            value={formValues.lastname}
            onChange={handleChange}
            className="profile-input"
          />
        </div>
        <div className="profile-block">
          <label htmlFor="weight">Weight(kg):</label>
          <input
            type="number"
            placeholder="Weight"
            name="weight"
            id="weight"
            value={formValues.weight}
            onChange={handleChange}
            className="profile-input"
          />
        </div>
        <div className="profile-block">
          <label htmlFor="height">Height(cm):</label>
          <input
            type="number"
            placeholder="Height"
            name="height"
            id="height"
            value={formValues.height}
            onChange={handleChange}
            className="profile-input"
          />
        </div>
        <div className="profile-block">
          <label htmlFor="DOB">Date of Birth:</label>
          <input
            type="date"
            name="DOB"
            id="DOB"
            value={formValues.DOB}
            onChange={handleChange}
            className="profile-input"
          />
        </div>
        <div className="profile-block">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={formValues.gender}
            onChange={handleChange}
            className="profile-input"
          >
            <option value="">--Select--</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
            {/*  <option value="o">Other</option> */}
          </select>
        </div>
        <span className="profile-block">BMI:{bmi}</span>
        <br />
        <button type="submit" className="profile-submit-btn">Submit</button>
      </form>
    </div>
  );
}
