import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddEmployee.css';

const AddEmployee: React.FC = () => {
  const [employeeID, setEmployeeID] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [image, setImage] = useState<File | null>(null); // State for image file
  const [preview, setPreview] = useState<string | null>(null); // State for image preview
  const navigate = useNavigate();

  // Handle image upload and convert image to Base64 string
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        // Convert file to Base64 string
        const base64 = reader.result?.toString().split(',')[1]; // Remove the data:image/* part
        setPreview(URL.createObjectURL(file)); // Preview for the user
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!image) {
      alert('Please upload an image.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result?.toString().split(',')[1]; // Base64 string of the image

      const formData = {
        employeeID,
        fullName,
        email,
        phoneNumber,
        department,
        imageBase64: base64, // Add the Base64 string here
      };

      try {
        const response = await axios.post(
          'https://rjjunsawi4.execute-api.us-east-1.amazonaws.com/test/employee',
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response.data);
        // Redirect back to the Manage Employees page
        navigate('/');
      } catch (error) {
        console.error('Error submitting employee data:', error);
        alert('An error occurred while submitting the employee data.');
      }
    };
    reader.readAsDataURL(image);
  };

  return (
    <div className="add-employee">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        {/* Image Upload Field */}
        <div className="form-group">
          <label>Employee Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Employee Preview" />
            </div>
          )}
        </div>

        {/* Employee ID Field */}
        <div className="form-group">
          <label>Employee ID</label>
          <input
            type="text"
            value={employeeID}
            onChange={(e) => setEmployeeID(e.target.value)}
            required
          />
        </div>

        {/* Full Name Field */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        {/* Department Field */}
        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;