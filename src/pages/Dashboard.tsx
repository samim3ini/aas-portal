import React, { useState } from 'react';
import { Container, Tabs, Tab, Box } from '@mui/material';
import ManageEmployees from './Management';
import AttendanceDashboard from './Attendance';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Employee management" />
        <Tab label="Attendance Records" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {activeTab === 0 && <ManageEmployees />}
        {activeTab === 1 && <AttendanceDashboard />}
      </Box>
    </Container>
  );
};

export default Dashboard;
