import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ManageEmployees from './pages/ManageEmployees';
import AddEmployee from './pages/AddEmployee';
import CheckEmployees from './pages/CheckEmployees';
import Logout from './pages/Logout';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
      <Router>
      <div className="app-container">
        {/* Header with Menu Icon and System Name */}
        <div className="header">
          <div className="menu-icon" onClick={toggleSidebar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <h1 className="system-name">Attendance System</h1>
        </div>

        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
         
          <nav>
            <Link to="/" className="nav-link" onClick={toggleSidebar}>
              Manage Employees
            </Link>
            <Link to="/employee-status" className="nav-link" onClick={toggleSidebar}>
              Employee Status
            </Link>
            <Link to="/logout" className="nav-link" onClick={toggleSidebar}>
              Logout
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<ManageEmployees />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/employee-status" element={<CheckEmployees />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
