
import React, { useState, useEffect } from 'react';

const ViewStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  return (
    <div>
      <h1>Student Requests</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            Name: {student.name} <br />
            Address of Training: {student.addressOfTraining} <br />
            Registration: {student.registration} <br />
            Phone Number: {student.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewStudents;
