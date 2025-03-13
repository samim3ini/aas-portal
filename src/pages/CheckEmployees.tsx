import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './CheckEmployees.css';

interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string;
  status: 'Present' | 'Absent';
  timePresent: string;
  timeLeave: string | null;
}

const EmployeeStatus: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: 'مفرح معيني',
      email: 'm.f.muain@gmail.com',
      phone: '0507523904',
      image: 'https://via.placeholder.com/50', // Placeholder image URL
      status: 'Present',
      timePresent: new Date().toLocaleTimeString(),
      timeLeave: null,
    },
    // Add more employees as needed
  ]);

  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD')); // Current date

  // Update the current date (optional, if you want it to update dynamically)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(moment().format('YYYY-MM-DD'));
    }, 1000); // Update every second (optional)

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Filter employees based on search term
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-status">
      <h2>Employee Status</h2>

      {/* Search Field */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by employee name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Employee Table */}
      <table className="status-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Time Present</th>
            <th>Time Leave</th>
            <th>Date</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <img className="employee-image"  />
              </td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>
                <span className={`status ${employee.status === 'Present' ? 'present' : 'absent'}`}>
                  {employee.status}
                </span>
              </td>
              <td>{employee.timePresent}</td>
              <td>{employee.timeLeave || 'N/A'}</td>
              <td>{currentDate}</td> {/* Current date of the day */}
              <td>{moment().format('dddd')}</td> {/* Current day of the week */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeStatus;