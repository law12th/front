import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authProvider";
import "../userLogin.css";

function UserLogin() {
  const { auth, setAuth } = useContext(AuthContext);

  const routes = {
    admin: "finalDb",
    doctor: "finaldoctorsdb",
    patient: "addAppointment",
  };

  let route = "";

  if (auth.role === "admin") {
    route = routes.admin;
  } else if (auth.role === "doctor") {
    route = routes.doctor;
  } else if (auth.role === "patient") {
    route = routes.patient;
  }

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/" + route;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post("http://localhost:8080/api/auth/login", { email, password })
      .then((res) => {
        const jwt = res.data.value;

        const token = jwt_decode(jwt);

        const role = token.role;
        const userId = token.userId;

        setAuth({ jwt, role, email, userId });

        console.log(from);

        navigate(from, { replace: true });

        alert("login successful");
      })
      .catch((err) => {
        console.log(err);
        alert("invalid credentials");
      });
  };

  return (
    <div className="loginb">
      <form onSubmit={onSubmit}>
        <div className="form">
          <h1>Hospital appointment module</h1>
          <br />
          <h1>User Login</h1>
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required="required"
          />
          <br />

          <br />

          <div className="form-outline mb-4">
            <input
              type="password"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required="required"
            />
          </div>
          <br />

          <div className="row mb-4">
            <br />
            <div className="col">
              <p className="kfc">
                <a href="#!">Forgot password?</a>
                Or <a href="/addPatients">Create account</a>
              </p>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn">
              Login
            </button>
            <br />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
