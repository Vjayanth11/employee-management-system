package com.example.employee_management_system.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class ReviewRequestDto {

    private Long revieweeId;
    private String title;
    private String description;
    private LocalDate dueDate;
    private String status;
}
