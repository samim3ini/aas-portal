import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageEmployees.css';

interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  timePresent: string;
  leavingTime: string;
}

const ManageEmployees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: 'مفرح معيني',
      email: 'm.f.muain@gmail.com',
      phone: '0507523904',
      department: 'oret',
      timePresent: '09:00 AM',
      leavingTime: '05:00 PM',
    },
    // Add more employees as needed
  ]);

  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  // Handle delete employee
  const handleDelete = (id: number) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  // Handle edit employee
  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
  };

  // Handle save edited employee
  const handleSaveEdit = (updatedEmployee: Employee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
    setEditingEmployee(null); // Exit edit mode
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
            <th>Time Present</th>
            <th>Leaving Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <div className="employee-image"></div> {/* Placeholder for image */}
              </td>
              <td>
                {editingEmployee?.id === employee.id ? (
                  <input
                    type="text"
                    value={editingEmployee.name}
                    onChange={(e) =>
                      setEditingEmployee({
                        ...editingEmployee,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  employee.name
                )}
              </td>
              <td>
                {editingEmployee?.id === employee.id ? (
                  <input
                    type="email"
                    value={editingEmployee.email}
                    onChange={(e) =>
                      setEditingEmployee({
                        ...editingEmployee,
                        email: e.target.value,
                      })
                    }
                  />
                ) : (
                  employee.email
                )}
              </td>
              <td>
                {editingEmployee?.id === employee.id ? (
                  <input
                    type="text"
                    value={editingEmployee.phone}
                    onChange={(e) =>
                      setEditingEmployee({
                        ...editingEmployee,
                        phone: e.target.value,
                      })
                    }
                  />
                ) : (
                  employee.phone
                )}
              </td>
              <td>
                {editingEmployee?.id === employee.id ? (
                  <input
                    type="text"
                    value={editingEmployee.department}
                    onChange={(e) =>
                      setEditingEmployee({
                        ...editingEmployee,
                        department: e.target.value,
                      })
                    }
                  />
                ) : (
                  employee.department
                )}
              </td>
              <td>
                {editingEmployee?.id === employee.id ? (
                  <input
                    type="text"
                    value={editingEmployee.timePresent}
                    onChange={(e) =>
                      setEditingEmployee({
                        ...editingEmployee,
                        timePresent: e.target.value,
                      })
                    }
                  />
                ) : (
                  employee.timePresent
                )}
              </td>
              <td>
                {editingEmployee?.id === employee.id ? (
                  <input
                    type="text"
                    value={editingEmployee.leavingTime}
                    onChange={(e) =>
                      setEditingEmployee({
                        ...editingEmployee,
                        leavingTime: e.target.value,
                      })
                    }
                  />
                ) : (
                  employee.leavingTime
                )}
              </td>
              <td>
                {editingEmployee?.id === employee.id ? (
                  <button
                    className="save-button"
                    onClick={() => handleSaveEdit(editingEmployee)}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(employee)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-employee" className="add-employee-link">
        Add Employee
      </Link>
    </div>
  );
};

export default ManageEmployees;