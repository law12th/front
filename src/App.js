import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AddAppointment, AddPatients } from "./components";
import AddDoctors from "./components/addDoctors";
import AdminDb from "./components/adminDb";
import DashBnav from "./components/dashBnav";
import Doctorsdb from "./components/doctorsdb";
import Doctorsnav from "./components/doctorsnav";
import Layout from "./components/layout";
import FinalDb from "./components/finalDb";
import Finaldoctorsdb from "./components/finaldoctorsdb";
import FinalPdb from "./components/finalPdb";
import LoginForm from "./components/loginForm";
import Unauthorized from "./components/unauthorized";
import NotFound from "./components/notFound";
import PatientsDb from "./components/patientsDb";
import Patientsnav from "./components/patientsnav";
import Proceed from "./components/proceed";
import Registration from "./components/registration";
import ThankU from "./components/thankU";
import UserLogin from "./components/userLogin";
import { AuthContext } from "./context/authProvider";
import RequireAuth from "./helpers/RequireAuth";
import { ROLES } from "./helpers/roles";

function App() {
  const { auth } = useContext(AuthContext);
  console.log(auth.userId);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
            <Route path="finalDb" element={<FinalDb />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.doctor]} />}>
            <Route
              path="finaldoctorsdb"
              element={<Finaldoctorsdb id={auth.userId} />}
            />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.patient]} />}>
            <Route path="addAppointment" element={<AddAppointment />} />
          </Route>

          <Route path="doctorsdb" element={<Doctorsdb id={auth.userId} />} />

          <Route path="finalPdb" element={<FinalPdb />} />

          <Route path="patientsnav" element={<Patientsnav />} />
          <Route path="patientsDb" element={<PatientsDb />} />
          <Route path="proceed" element={<Proceed />} />
          <Route path="thankU" element={<ThankU />} />

          <Route path="addPatients" element={<AddPatients />} />

          <Route path="dashBnav" element={<DashBnav />} />
          <Route path="doctorsnav" element={<Doctorsnav />} />

          <Route path="addDoctors" element={<AddDoctors />} />
          <Route path="adminDb" element={<AdminDb />} />

          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<UserLogin />} />
          <Route path="loginForm" element={<LoginForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
