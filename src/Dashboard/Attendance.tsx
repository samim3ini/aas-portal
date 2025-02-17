import React from 'react';

interface AttendanceRecord {
  id: number;
  employeeName: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late';
}

const sampleData: AttendanceRecord[] = [
  { id: 1, employeeName: 'John Doe', date: '2025-02-17', status: 'Present' },
  { id: 2, employeeName: 'Jane Smith', date: '2025-02-17', status: 'Absent' },
  // Add more sample data as needed
];

export const AttendanceTable: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold mb-4">Attendance Records</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Employee Name</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((record) => (
            <tr key={record.id}>
              <td className="border px-4 py-2">{record.employeeName}</td>
              <td className="border px-4 py-2">{record.date}</td>
              <td className="border px-4 py-2">{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
