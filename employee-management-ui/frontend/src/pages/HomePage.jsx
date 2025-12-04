import React from "react";
import Navbar from "../components/Navbar";
import "./home.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Employee Management System</h1>
        <p className="subtitle">Choose your portal to continue</p>

        <div className="button-group">
          <a href="/employee" className="big-btn blue">
            Employee Portal
          </a>

          <a href="/admin" className="big-btn green">
            Admin Portal
          </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;
