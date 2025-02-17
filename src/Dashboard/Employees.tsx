import React from 'react';

interface Employee {
  id: number;
  name: string;
  position: string;
}

const employees: Employee[] = [
  { id: 1, name: 'John Doe', position: 'Software Engineer' },
  { id: 2, name: 'Jane Smith', position: 'Product Manager' },
];

export const EmployeeList: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold mb-4">Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} className="flex justify-between items-center py-2 border-b">
            <div>
              <p className="font-semibold">{employee.name}</p>
              <p className="text-sm text-gray-600">{employee.position}</p>
            </div>
            <div>
              <button className="text-blue-500 mr-2">Edit</button>
              <button className="text-red-500">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
