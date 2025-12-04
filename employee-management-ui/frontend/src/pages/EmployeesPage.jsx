import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import api from "../api/api";
import "./home.css";

function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveEmployee = async (e) => {
    e.preventDefault();

    if (editId === null) {
      await api.post("/employees", form);
      alert("Employee Added");
    } else {
      await api.put(`/employees/${editId}`, form);
      alert("Employee Updated");
      setEditId(null);
    }

    setForm({ name: "", email: "", role: "" });
    loadEmployees();
  };

  const editEmployee = (emp) => {
    setEditId(emp.id);
    setForm({ name: emp.name, email: emp.email, role: emp.role });
  };

  const deleteEmployee = async (id) => {
    await api.delete(`/employees/${id}`);
    alert("Employee Deleted");
    loadEmployees();
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Employees</h2>

        <form onSubmit={saveEmployee} className="form-box">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="role" placeholder="Role" value={form.role} onChange={handleChange} required />

          <button className="btn-blue">{editId ? "Update Employee" : "Add Employee"}</button>
        </form>

        <table className="table-box">
          <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Actions</th></tr>
          </thead>

          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.role}</td>
                <td>
                  <button onClick={() => editEmployee(emp)}>Edit</button>
                  <button onClick={() => deleteEmployee(emp.id)} style={{ marginLeft: 5, color: "red" }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  );
}

export default EmployeesPage;
