import axios from 'axios';

const API_GET = 'https://rjjunsawi4.execute-api.us-east-1.amazonaws.com/test/manageEmployees';
const API_POST = 'https://rjjunsawi4.execute-api.us-east-1.amazonaws.com/test/employee';
const API_PUT_DELETE_BASE = 'https://rjjunsawi4.execute-api.us-east-1.amazonaws.com/test/manageEmployees';

export const fetchEmployees = async () => {
  return axios.get(API_GET);
};

export const addEmployee = async (employeeData: any) => {
  return axios.post(API_POST, employeeData, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const updateEmployee = async (employeeID: string, updatedData: any) => {
  return axios.put(`${API_PUT_DELETE_BASE}/${employeeID}`, updatedData, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const deleteEmployee = async (employeeID: string) => {
  return axios.delete(`${API_PUT_DELETE_BASE}/${employeeID}`);
};
