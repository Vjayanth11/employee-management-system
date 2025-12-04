import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

function FeedbackPage() {
  const { assignmentId } = useParams();
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await api.post(`/feedback/assignment/${assignmentId}`, { rating, comments });
    alert("Feedback Submitted");
  };

  return (
    <div className="container">
      <h2>Submit Feedback</h2>

      <form onSubmit={submit} className="form-box">
        <input type="number" placeholder="Rating" value={rating} onChange={(e)=>setRating(e.target.value)} />
        <textarea placeholder="Comments" value={comments} onChange={(e)=>setComments(e.target.value)} />
        <button className="btn-blue">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackPage;
