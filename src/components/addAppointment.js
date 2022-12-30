import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../addDoctors.css";
import { AuthContext } from "../context/authProvider";

function AddAppointment() {
  const navigate = useNavigate();

  const { auth } = useContext(AuthContext);

  const [appointmentTime, setAppointmentTime] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState(0);

  useEffect(() => {
    const getDoctors = async () => {
      await axios
        .get("http://localhost:8080/api/admin/get-doctors")
        .then((res) => {
          setDoctors(res.data);
          console.log(res.data);
        })
        .catch((e) => console.log(e));
    };

    getDoctors();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/api/patient/add-appointment", {
      doctorId,
      appointmentTime,
      patientId: auth.userId,
    });
  };

  return (
    <div className="form">
      <h2>Add appointment</h2>
      <br />
      <form className="form2" onSubmit={onSubmit}>
        <br />
        <br />
        <input
          type="datetime-local"
          className="L"
          required="required"
          placeholder="Enter date..."
          onChange={(e) => setAppointmentTime(e.target.value)}
          value={appointmentTime}
        />
        <br />
        <br />
        <br />
        <select placeholder="name">
          {doctors &&
            doctors.map((doctor) => (
              <option onChange={() => setDoctorId(doctor.id)} value={doctor.id}>
                Dr {doctor.firstName} {doctor.lastName}
              </option>
            ))}
        </select>
        <br />
        <button
          className="sb"
          onClick={() => {
            navigate("/");
          }}
        >
          CLOSE
        </button>{" "}
        <button type="submit" className="sb">
          ADD
        </button>
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
