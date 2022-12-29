import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../addDoctors.css";
import { addPatient } from "../api/patientApi";

function AddPatients() {
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    dateOfBirth: "",
  });

  const onSubmit = async (e) => {
    // prevent page from reloading when a form is submitted
    e.preventDefault();

    await addPatient(patient)
      .then(() => {
        navigate("/finaldoctorsdb");
      })
      .catch((e) => console.log(e));

    // onClick={() => {navigate('/finaldoctorsdb')}}
  };
  return (
    <div id="form">
      <h2>New Patient</h2>
      <br />
      <form className="form2" onSubmit={onSubmit}>
        <input
          type="text"
          className="L"
          required="required"
          onChange={(e) => setPatient({ ...patient, username: e.target.value })}
          value={patient.username}
          placeholder="Enter username..."
        />
        <br />
        <br />
        <input
          type="text"
          className="L"
          required="required"
          value={patient.firstName}
          onChange={(e) =>
            setPatient({ ...patient, firstName: e.target.value })
          }
          placeholder="Enter Fist name..."
        />
        <br />
        <br />
        <input
          type="text"
          className="L"
          required="required"
          value={patient.lastName}
          onChange={(e) => setPatient({ ...patient, lastName: e.target.value })}
          placeholder="Enter Last name..."
        />
        <br />
        <br />
        <input
          type="email"
          className="L"
          value={patient.email}
          required="required"
          onChange={(e) => setPatient({ ...patient, email: e.target.value })}
          placeholder="Enter email..."
        />
        <br />
        <br />
        <input
          type="password"
          className="L"
          required="required"
          value={patient.password}
          onChange={(e) => setPatient({ ...patient, password: e.target.value })}
          placeholder="Enter password..."
        />
        <br />
        <br />
        <input
          type="date"
          className="L"
          required="required"
          value={patient.dateOfBirth}
          onChange={(e) =>
            setPatient({ ...patient, dateOfBirth: e.target.value })
          }
          placeholder="Enter date of birth..."
        />
        <br />
        <br />
        <button type="submit" className="sb">
          CLOSE
        </button>{" "}
        <button type="submit" className="sb">
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddPatients;
