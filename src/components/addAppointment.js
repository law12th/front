import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../addDoctors.css";
import { addAppointment } from "../api";

function AddAppointment() {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState({
    appointmentTime: "",
  });

  const onSubmit = async (e) => {
    // prevent page from reloading when a form is submitted
    e.preventDefault();

    await addAppointment(appointment)
      .then(() => {
        navigate("/thankU");
      })
      .catch((e) => console.log(e));

    // onClick={() => {navigate('/finaldoctorsdb')}}
  };

  return (
    <div className="form">
      <h2>Add appointment</h2>
      <br />
      <form className="form2" onSubmit={onSubmit}>
        <br />
        <br />
        <input
          type="date"
          className="L"
          required="required"
          placeholder="Enter date..."
          onChange={(e) =>
            setAppointment({ ...appointment, appointmentTime: e.target.value })
          }
          value={appointment.appointmentDate}
        />
        <br />
        <br />
        <br />
        <br />
        <button
          type="submit"
          className="sb"
          onClick={() => {
            navigate("/");
          }}
        >
          CLOSE
        </button>{" "}
        <button className="sb">ADD</button>
        <br />
        <br />
        <p>
          An available doctor will take up this appointment after submission
        </p>
      </form>
    </div>
  );
}

export default AddAppointment;
