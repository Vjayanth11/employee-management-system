package com.example.employee_management_system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employee_management_system.dto.ReviewRequestDto;
import com.example.employee_management_system.entity.Employee;
import com.example.employee_management_system.entity.PerformanceReview;
import com.example.employee_management_system.repository.EmployeeRepository;
import com.example.employee_management_system.repository.PerformanceReviewRepository;

@Service
public class PerformanceReviewService {

    @Autowired
    private PerformanceReviewRepository reviewRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public PerformanceReview createReview(ReviewRequestDto dto) {

        Employee reviewee = employeeRepository.findById(dto.getRevieweeId())
                .orElseThrow(() -> new RuntimeException("Reviewee not found"));

        PerformanceReview review = new PerformanceReview();
        review.setReviewee(reviewee);
        review.setTitle(dto.getTitle());
        review.setDescription(dto.getDescription());
        review.setDueDate(dto.getDueDate());
        review.setStatus(dto.getStatus());

        return reviewRepository.save(review);
    }

    public List<PerformanceReview> getAllReviews() {
        return reviewRepository.findAll();
    }

    public PerformanceReview getReview(Long id) {
        return reviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found"));
    }
}
