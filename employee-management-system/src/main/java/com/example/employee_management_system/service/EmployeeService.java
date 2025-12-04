package com.example.employee_management_system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employee_management_system.entity.Employee;
import com.example.employee_management_system.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // add employee
    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    // get all employees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // delete employee
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

    // update employee
    public Employee updateEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee getEmployee(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }
}
