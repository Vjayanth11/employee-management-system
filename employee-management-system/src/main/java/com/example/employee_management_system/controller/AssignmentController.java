package com.example.employee_management_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.employee_management_system.dto.PendingAssignmentDto;
import com.example.employee_management_system.entity.ReviewAssignment;
import com.example.employee_management_system.service.ReviewAssignmentService;

@RestController
@RequestMapping("/assignments")
public class AssignmentController {

    @Autowired
    private ReviewAssignmentService assignmentService;

    // assign a reviewer to a review
    @PostMapping("/review/{reviewId}/employee/{employeeId}")
    public ReviewAssignment assignReviewer(
            @PathVariable Long reviewId,
            @PathVariable Long employeeId) {
        return assignmentService.assignReviewer(reviewId, employeeId);
    }

    // employee pending works
    @GetMapping("/pending/{employeeId}")
    public List<PendingAssignmentDto> getPendingAssignments(@PathVariable Long employeeId) {
        return assignmentService.getPendingAssignments(employeeId);
    }
}

