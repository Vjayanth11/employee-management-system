import React from "react";
import Navbar from "../components/Navbar";
import "./home.css";

function EmployeePage() {
  return (
    <>
      <Navbar />

      <div className="container">

        <h2>Employee Dashboard</h2>
        <p className="subtitle">Choose an action</p>

        <div className="button-group">

          {/* View Pending Assignments */}
          <a href="/assignments" className="big-btn blue">
            View Pending Assignments
          </a>

          {/* Submit Feedback */}
          <a href="/feedback/1" className="big-btn green">
            Submit Feedback
          </a>

        </div>
      </div>
    </>
  );
}

export default EmployeePage;
