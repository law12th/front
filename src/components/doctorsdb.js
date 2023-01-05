import axios from "axios";
import React, { useEffect, useState } from "react";
import "../adminDb.css";
import ApproveAppointment from "./approveAppointment";

const Doctorsdb = (props) => {
  const [appointments, setAppointments] = useState([]);
  console.log(props.id);

  useEffect(() => {
    const fetchAppointments = async () => {
      await axios
        .post("http://localhost:8080/api/doctor/get-appointments", {
          doctorId: props.id,
        })
        .then((res) => {
          setAppointments(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchAppointments();
  }, [props.id]);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Patient</th>
            <th>Time</th>
            <th>Details</th>
            <th>approval</th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            appointments.map(
              ({
                id,
                appointmentTime,
                approval,
                doctorName,
                patientName,
                details,
              }) => (
                <tr key={id}>
                  <td>{doctorName}</td>
                  <td>{patientName}</td>
                  <td>{appointmentTime}</td>
                  <td>{details}</td>
                  <td>
                    {!approval ? <ApproveAppointment id={id} /> : "Approve"}
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Doctorsdb;
