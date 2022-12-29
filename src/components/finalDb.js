import React from "react";
import DashBnav from "./dashBnav";
import AdminDb from "./adminDb";

export default function FinalDb() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <DashBnav />
      <AdminDb />
    </div>
  );
}
