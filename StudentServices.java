package com.rest.students.service;


import com.rest.students.model.Student;

import java.util.List;

public interface StudentServices {
    Student saveStudent(Student student);
    List<Student> getAllStudents();
}
