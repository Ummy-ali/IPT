package com.rest.students.service;

import com.rest.students.model.Admin;

public interface AdminServices {
    public Admin saveAdmin(Admin admin);
    public boolean validateAdmin(String email, String password);
}
