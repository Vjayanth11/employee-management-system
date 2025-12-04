import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/api";

function EmployeeAssignmentsPage() {
  const employeeId = 1; // static since no login
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get(`/assignments/reviewer/${employeeId}`);
    setAssignments(res.data);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Your Assigned Reviews</h2>

        {assignments.map(a => (
          <div key={a.id}>
            <h4>{a.review.title}</h4>
            <a href={`/feedback/${a.id}`}>Submit Feedback</a>
          </div>
        ))}

      </div>
    </>
  );
}

export default EmployeeAssignmentsPage;
