package com.example.employee_management_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.employee_management_system.dto.ReviewRequestDto;
import com.example.employee_management_system.entity.PerformanceReview;
import com.example.employee_management_system.service.PerformanceReviewService;

@RestController
@RequestMapping("/reviews")
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {

    @Autowired
    private PerformanceReviewService reviewService;

    @PostMapping
    public PerformanceReview createReview(@RequestBody ReviewRequestDto dto) {
        return reviewService.createReview(dto);
    }

    @GetMapping
    public List<PerformanceReview> getAllReviews() {
        return reviewService.getAllReviews();
    }

    @GetMapping("/{id}")
    public PerformanceReview getReview(@PathVariable Long id) {
        return reviewService.getReview(id);
    }
}
