import axios from "axios";
import React, { useEffect, useState } from "react";
import "../adminDb.css";

const AdminDb = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      await axios
        .get("http://localhost:8080/api/admin/get-doctors")
        .then((res) => {
          setDoctors(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchDoctors();
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {doctors &&
            doctors.map(({ id, firstName, lastName, email }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDb;
