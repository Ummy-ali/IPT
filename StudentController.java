package com.rest.students.controller;




import com.rest.students.model.Student;
import com.rest.students.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:3000") 
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping
    public Student registerStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
}


