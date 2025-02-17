import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Attendance', key: 'attendance' },
    { name: 'Employees', key: 'employees' },
    { name: 'Statistics', key: 'statistics' },
    { name: 'Reports', key: 'reports' },
  ];

  return (
    <div className="sidebar">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={activeTab === tab.key ? 'active' : ''}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};