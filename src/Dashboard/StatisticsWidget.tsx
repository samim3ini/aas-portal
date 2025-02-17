// StatisticsWidget.tsx
import React from 'react';

export const StatisticsWidget: React.FC = () => {
  const totalEmployees = 50;
  const presentToday = 45;
  const absentToday = 5;

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold mb-4">Statistics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold">{totalEmployees}</p>
          <p>Total Employees</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{presentToday}</p>
          <p>Present Today</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{absentToday}</p>
          <p>Absent Today</p>
        </div>
      </div>
    </div>
  );
};
