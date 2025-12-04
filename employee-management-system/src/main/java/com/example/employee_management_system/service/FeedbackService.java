package com.example.employee_management_system.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employee_management_system.dto.FeedbackRequestDto;
import com.example.employee_management_system.entity.Feedback;
import com.example.employee_management_system.entity.ReviewAssignment;
import com.example.employee_management_system.repository.FeedbackRepository;
import com.example.employee_management_system.repository.ReviewAssignmentRepository;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private ReviewAssignmentRepository assignmentRepository;

    public Feedback submitFeedback(Long assignmentId, FeedbackRequestDto dto) {

        ReviewAssignment assignment = assignmentRepository.findById(assignmentId).orElse(null);

        if (assignment == null) {
            return null;
        }

        Feedback feedback = new Feedback();
        feedback.setReviewAssignment(assignment);
        feedback.setRating(dto.getRating());
        feedback.setComments(dto.getComments());
        feedback.setFeedbackDate(LocalDateTime.now());

        // mark assignment as completed
        assignment.setStatus("COMPLETED");
        assignmentRepository.save(assignment);

        return feedbackRepository.save(feedback);
    }
}

