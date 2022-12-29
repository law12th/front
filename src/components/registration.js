import axios from "axios";
import React, { useState } from "react";
import "../userLogin.css";
import { Link } from "react-router-dom";

function Registration() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post("http://localhost:8080/api/auth/register", values)
      .then(() => {
        setSuccess(true);
        setValues({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          dateOfBirth: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {success ? (
        <div className="container">
          <h2>Account Successfully created, please signin.</h2>
          <br />
          <Link to="/" className="btn btn-primary">
            Signin
          </Link>
        </div>
      ) : (
        <div className="loginb">
          <form onSubmit={onSubmit}>
            <div className="form">
              <h1>Register</h1>
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={onChange}
                className="form-control"
                placeholder="enter firstName.."
              />
              <br />
              <br />
              <br />

              <input
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={onChange}
                className="form-control"
                placeholder="enter lastName.."
              />
              <br />
              <br />
              <br />

              <input
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                className="form-control"
                placeholder="enter email.."
              />
              <br />
              <br />
              <br />
              <input
                type="dateTime-local"
                name="dateOfBirth"
                value={values.dateOfBirth}
                onChange={onChange}
                className="form-control"
                placeholder="enter DateOfBirth"
              />
              <br />
              <br />
              <br />
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={onChange}
                className="form-control"
                placeholder="enter password.. "
              />
              <br />
              <br />
              <br />
              <button className="btn">signUp</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Registration;
