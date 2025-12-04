import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import EmployeePage from "./pages/EmployeePage.jsx";

import EmployeesPage from "./pages/EmployeesPage.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";
import AssignReviewerPage from "./pages/AssignReviewerPage.jsx";
import EmployeeAssignmentsPage from "./pages/EmployeeAssignmentsPage.jsx";
import FeedbackPage from "./pages/FeedbackPage.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main portals */}
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/employee" element={<EmployeePage />} />

        {/* Admin functionality */}
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/assign-reviewer" element={<AssignReviewerPage />} />

        {/* Employee functionality */}
        <Route path="/assignments" element={<EmployeeAssignmentsPage />} />
        <Route path="/feedback/:assignmentId" element={<FeedbackPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
