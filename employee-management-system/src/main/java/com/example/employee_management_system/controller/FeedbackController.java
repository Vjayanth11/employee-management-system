package com.example.employee_management_system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.employee_management_system.dto.FeedbackRequestDto;
import com.example.employee_management_system.entity.Feedback;
import com.example.employee_management_system.service.FeedbackService;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "http://localhost:5173")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/assignment/{assignmentId}")
    public Feedback submitFeedback(
            @PathVariable Long assignmentId,
            @RequestBody FeedbackRequestDto dto) {
        return feedbackService.submitFeedback(assignmentId, dto);
    }
}

