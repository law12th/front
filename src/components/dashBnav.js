import { useNavigate } from "react-router-dom";
import React from "react";
import "../dashBnav.css";

function DashBnav() {
  const navigate = useNavigate();
  return (
    <div className="top">
      <div className="item">
        <button
          className="btn2"
          onClick={() => {
            navigate("/addDoctors");
          }}
        >
          ADD
        </button>
      </div>

      <div className="item">
        <button
          className="btn3"
          onClick={() => {
            navigate("/");
          }}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default DashBnav;
