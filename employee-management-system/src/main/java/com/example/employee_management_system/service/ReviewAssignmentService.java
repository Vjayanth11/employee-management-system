package com.example.employee_management_system.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employee_management_system.dto.PendingAssignmentDto;
import com.example.employee_management_system.entity.Employee;
import com.example.employee_management_system.entity.PerformanceReview;
import com.example.employee_management_system.entity.ReviewAssignment;
import com.example.employee_management_system.repository.EmployeeRepository;
import com.example.employee_management_system.repository.PerformanceReviewRepository;
import com.example.employee_management_system.repository.ReviewAssignmentRepository;

@Service
public class ReviewAssignmentService {

    @Autowired
    private ReviewAssignmentRepository assignmentRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PerformanceReviewRepository reviewRepository;

    // assign a reviewer to a review
    public ReviewAssignment assignReviewer(Long reviewId, Long reviewerId) {

        PerformanceReview review = reviewRepository.findById(reviewId).orElse(null);
        Employee reviewer = employeeRepository.findById(reviewerId).orElse(null);

        if (review == null || reviewer == null) {
            return null;
        }

        ReviewAssignment assignment = new ReviewAssignment();
        assignment.setReview(review);
        assignment.setReviewer(reviewer);
        assignment.setStatus("PENDING");

        return assignmentRepository.save(assignment);
    }

    // pending list for employee
    public List<PendingAssignmentDto> getPendingAssignments(Long employeeId) {
        List<ReviewAssignment> assignments = assignmentRepository.findAll();

        List<PendingAssignmentDto> result = new ArrayList<>();

        for (ReviewAssignment a : assignments) {
            if (a.getReviewer().getId() == employeeId && a.getStatus().equals("PENDING")) {
                PendingAssignmentDto dto = new PendingAssignmentDto(
                        a.getId(),
                        a.getReview().getTitle(),
                        a.getReview().getReviewee().getName(),
                        a.getReview().getDueDate(),
                        a.getStatus()
                );

                result.add(dto);
            }
        }
        return result;
    }
}

