import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import ManageEmployees from './pages/ManageEmployees';
import AddEmployee from './pages/AddEmployee';
import Settings from './pages/Setting';
import Logout from './pages/Logout';

function App() {
  const { signOut } = useAuthenticator();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main>
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
            <Link to="/settings" className="nav-link" onClick={toggleSidebar}>
              Settings
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
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
