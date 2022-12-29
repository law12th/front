import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../addDoctors.css";
import { addDoctor } from "../api/adminApi";

function AddDoctors() {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({
    doctorName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });
  const onSubmit = async (e) => {
    // prevent page from reloading when a form is submitted
    e.preventDefault();

    await addDoctor(doctor)
      .then(() => {
        navigate("/finalDb");
      })
      .catch((e) => console.log(e));

    // onClick={() => {navigate('/finaldoctorsdb')}}
  };

  return (
    <div id="form" onSubmit={onSubmit}>
      <h2>Add new provider(Doctor)</h2>
      <br />
      <form className="form2">
        <input
          type="int"
          className="L"
          required="required"
          placeholder="Enter firstName..."
          onChange={(e) => setDoctor({ ...doctor, firstName: e.target.value })}
          value={doctor.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          className="L"
          required="required"
          placeholder="Enter lastName..."
          onChange={(e) => setDoctor({ ...doctor, lastName: e.target.value })}
          value={doctor.lastName}
        />
        <br />
        <br />
        <input
          type="text"
          className="L"
          required="required"
          placeholder="Enter specialization..."
          onChange={(e) => setDoctor({ ...doctor, username: e.target.value })}
          value={doctor.username}
        />
        <br />
        <br />
        <input
          type="email"
          className="L"
          required="required"
          placeholder="Enter email..."
          onChange={(e) => setDoctor({ ...doctor, email: e.target.value })}
          value={doctor.email}
        />
        <br />
        <br />
        <input
          type="password"
          className="L"
          required="required"
          placeholder="Enter password"
          onChange={(e) => setDoctor({ ...doctor, password: e.target.value })}
          value={doctor.password}
        />
        <br />
        <br />
        <input
          type="text"
          className="L"
          required="required"
          placeholder="Enter date of birth..."
          onChange={(e) =>
            setDoctor({ ...doctor, dateOfBirth: e.target.value })
          }
          value={doctor.dateOfBirth}
        />
        <br />
        <br />
        <input
          type="password"
          className="L"
          required="required"
          placeholder="confirm password..."
        />
        <br />
        <br />
        <button type="submit" className="sb">
          CLOSE
        </button>{" "}
        <button className="sb">ADD</button>
      </form>
    </div>
  );
}

export default AddDoctors;
