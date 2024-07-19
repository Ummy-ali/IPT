package com.rest.students.controller;

import com.rest.students.model.Admin;
import com.rest.students.service.AdminServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chief")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminServices adminServices;

    @PostMapping("/login")
    public boolean loginAdmin(@RequestBody Admin admin) {
        return adminServices.validateAdmin(admin.getEmail(), admin.getPassword());
    }

    @PostMapping("/add")
    public String saveAdmin(@RequestBody Admin admin) {
        adminServices.saveAdmin(admin);
        return "admin added";
    }
}
