import React, { useState } from 'react';
import { Sidebar } from './sidebar.tsx';
import { Header } from './header.tsx';
import { AttendanceTable } from './Attendance';
import { EmployeeList } from './Employees';
import { StatisticsWidget } from './StatisticsWidget';
import { Reports } from './Reports';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('attendance');

  return (
    <div id="root">
      <Header />
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="main-content">
        <main>
          {activeTab === 'attendance' && <AttendanceTable />}
          {activeTab === 'employees' && <EmployeeList />}
          {activeTab === 'statistics' && <StatisticsWidget />}
          {activeTab === 'reports' && <Reports />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;