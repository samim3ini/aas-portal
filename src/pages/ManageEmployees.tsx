import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ManageEmployees.css';

interface Employee {
  employeeID: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  department: string;
  imageS3Key: string;
}

const API_URL = 'https://rjjunsawi4.execute-api.us-east-1.amazonaws.com/test/manageEmployees';

const ManageEmployees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios.get(API_URL)
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error('Error fetching employees:', error));
  };

  const handleDelete = (employeeID: string) => {
    axios.delete(`${API_URL}/${employeeID}`)
      .then(() => setEmployees(employees.filter(emp => emp.employeeID !== employeeID)))
      .catch((error) => console.error('Error deleting employee:', error));
  };

  const handleEdit = async (employeeID: string, updatedData: Partial<Employee>) => {
    try {
      await axios.put(`${API_URL}/${employeeID}`, updatedData, {
        headers: { "Content-Type": "application/json" }
      });

      alert("Employee updated successfully!");
      fetchEmployees(); // Refresh the list after update
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Failed to update employee.");
    }
  };

  return (
    <div className="manage-employees">
      <h2>Manage Employees</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeID}>
              <td>
                <img src={`https://employees-facial-images.s3.amazonaws.com/${employee.imageS3Key}`} alt="Employee" width="50" />
              </td>
              <td>{employee.fullName}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.department}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(employee.employeeID)}>Delete</button>
                <button className="edit-button" onClick={() => handleEdit(employee.employeeID, { fullName: 'Updated Name' })}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-employee" className="add-employee-link">Add Employee</Link>
    </div>
  );
};

export default ManageEmployees;