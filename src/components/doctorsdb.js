import axios from "axios";
import React, { useEffect, useState } from "react";
import "../adminDb.css";

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
            <th>Appointment Time</th>
            <th>approval</th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            appointments.map(
              ({ appointmentTime, approval, doctorName, patientName }) => (
                <tr>
                  <td>{doctorName}</td>
                  <td>{patientName}</td>
                  <td>{appointmentTime}</td>
                  <td>{approval}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Doctorsdb;
