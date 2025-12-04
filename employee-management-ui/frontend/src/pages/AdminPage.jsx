import React from "react";
import Navbar from "../components/Navbar";
import "./home.css";

function AdminPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Admin Dashboard</h2>

        <div className="button-group">

          <a href="/employees" className="big-btn blue">Manage Employees</a>

          <a href="/reviews" className="big-btn green">Manage Reviews</a>

          <a href="/assign-reviewer" className="big-btn blue">Assign Reviewer</a>

        </div>
      </div>
    </>
  );
}

export default AdminPage;

