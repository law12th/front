import React from "react";
import Doctorsnav from "./doctorsnav";
import Doctorsdb from "./doctorsdb";

function Finaldoctorsdb(props) {
  return (
    <div>
      <h2>Doctor's Dashboard</h2>
      <Doctorsnav />
      <Doctorsdb id={props.id} />
    </div>
  );
}
export default Finaldoctorsdb;
