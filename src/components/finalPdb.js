import React from "react";
import PatientsDb from "./patientsDb";
import Patientsnav from "./patientsnav";

export default function Finalpdb() {
  return (
    <div>
      <h2>Patients Dashboard</h2>
      <Patientsnav />
      <PatientsDb />
    </div>
  );
}
