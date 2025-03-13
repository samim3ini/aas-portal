// EmployeeTable.tsx
import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Paper, TableContainer } from '@mui/material';

interface Employee {
  employeeID: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  department: string;
  imageBase64?: string;
}

interface EmployeeTableProps {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (employeeID: string) => void;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
      <Table aria-label="employee table">
        <TableHead sx={{ bgcolor: 'primary.light' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Image</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Email</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Phone</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Department</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.employeeID} hover>
              <TableCell>
                {employee.imageBase64 ? (
                  <img
                    src={`data:image/jpeg;base64,${employee.imageBase64}`}
                    alt="Employee"
                    width="50"
                    style={{ borderRadius: '50%' }}
                  />
                ) : (
                  <img src="/placeholder.png" alt="No Image" width="50" style={{ borderRadius: '50%' }} />
                )}
              </TableCell>
              <TableCell>{employee.fullName}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.phoneNumber}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" onClick={() => onEdit(employee)} sx={{ mr: 1 }}>
                  Edit
                </Button>
                <Button variant="outlined" color="error" onClick={() => onDelete(employee.employeeID)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
