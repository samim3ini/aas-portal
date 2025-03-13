import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Remove other routes if they are no longer needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
