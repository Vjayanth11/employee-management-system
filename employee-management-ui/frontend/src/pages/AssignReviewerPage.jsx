import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/api";

function AssignReviewerPage() {
  const [employees, setEmployees] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [selectedReview, setSelectedReview] = useState("");
  const [selectedReviewer, setSelectedReviewer] = useState("");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setEmployees((await api.get("/employees")).data);
    setReviews((await api.get("/reviews")).data);
  };

  const assign = async () => {
    await api.post("/assignments", {
      reviewId: selectedReview,
      reviewerId: selectedReviewer
    });
    alert("Reviewer Assigned");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Assign Reviewer</h2>

        <select onChange={(e)=>setSelectedReview(e.target.value)}>
          <option>Choose Review</option>
          {reviews.map(r => <option key={r.id} value={r.id}>{r.title}</option>)}
        </select>

        <select onChange={(e)=>setSelectedReviewer(e.target.value)}>
          <option>Choose Employee</option>
          {employees.map(emp => <option key={emp.id} value={emp.id}>{emp.name}</option>)}
        </select>

        <button className="btn-blue" onClick={assign}>Assign</button>
      </div>
    </>
  );
}

export default AssignReviewerPage;
