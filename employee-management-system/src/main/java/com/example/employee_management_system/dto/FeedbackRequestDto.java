package com.example.employee_management_system.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// used when employee submits feedback
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackRequestDto {

    private int rating;
    private String comments;
}

