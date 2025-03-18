import axios from 'axios';

const API_URL = 'https://rjjunsawi4.execute-api.us-east-1.amazonaws.com/test/manageEmployees';

export const fetchEmployees = async () => {
  return axios.get(API_URL);
};

export const addEmployee = async (employeeData: any) => {
  return axios.post(API_URL, employeeData, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const updateEmployee = async (employeeID: string, updatedData: any) => {
  return axios.put(`${API_URL}/${employeeID}`, updatedData, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const deleteEmployee = async (employeeID: string) => {
  return axios.delete(`${API_URL}/${employeeID}`);
};

export const fetchAttendanceRecords = async () => {
    return axios.get(API_URL+'?type=attendance');
};
