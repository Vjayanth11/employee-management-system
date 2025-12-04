import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/api";
import "./home.css";

function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [employees, setEmployees] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    revieweeId: ""
  });

  useEffect(() => {
    loadReviews();
    loadEmployees();
  }, []);


  const loadReviews = async () => {
    const res = await api.get("/reviews");
    setReviews(res.data);
  };


  const loadEmployees = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  // Save a new review
  const saveReview = async (e) => {
    e.preventDefault();

    if (!form.revieweeId) {
      alert("Please select an employee to review");
      return;
    }

    await api.post("/reviews", {
      revieweeId: form.revieweeId,
      title: form.title,
      description: form.description,
      dueDate: form.dueDate,
      status: "OPEN"
    });

    alert("Review Added Successfully!");

    setForm({
      title: "",
      description: "",
      dueDate: "",
      revieweeId: ""
    });

    loadReviews();
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Performance Reviews</h2>

        <form className="form-box" onSubmit={saveReview}>

          <select
            value={form.revieweeId}
            onChange={(e) => setForm({ ...form, revieweeId: e.target.value })}
          >
            <option value="">Select Employee</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.name}
              </option>
            ))}
          </select>

          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <input
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <input
            name="dueDate"
            type="date"
            value={form.dueDate}
            onChange={(e) =>
              setForm({ ...form, dueDate: e.target.value })
            }
          />

          <button className="btn-blue">Add Review</button>
        </form>

        <table className="table-box">
          <thead>
            <tr>
              <th>ID</th>
              <th>Reviewee</th>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.reviewee?.name}</td>
                <td>{r.title}</td>
                <td>{r.description}</td>
                <td>{r.dueDate}</td>
                <td>{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ReviewsPage;
