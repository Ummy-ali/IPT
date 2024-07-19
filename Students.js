
import React, { useState, useEffect } from 'react';
import './Students.css';

const Admin = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: '',
    addressOfTraining: '',
    registration: '',
    phoneNumber: ''
  });

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudents = [...students, form];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setForm({ name: '', addressOfTraining: '', registration: '', phoneNumber: '' });
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  const handleEdit = (index) => {
    const student = students[index];
    setForm(student);
    handleDelete(index);
  };

  return (
    <div className="admin-container">
      <h1>  Training form</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="addressOfTraining" value={form.addressOfTraining} onChange={handleChange} placeholder="Address of Training" required />
        <input type="text" name="registration" value={form.registration} onChange={handleChange} placeholder="Registration" required />
        <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
        <button type="submit">Add/Update Student</button>
      </form>
      <ul className="student-list">
        {students.map((student, index) => (
          <li key={index} className="student-item">
            {student.name} - {student.addressOfTraining} - {student.registration} - {student.phoneNumber}
            <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
