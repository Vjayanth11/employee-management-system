package com.example.employee_management_system.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// used to send pending review details to employee
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PendingAssignmentDto {

    private Long assignmentId;
    private String reviewTitle;
    private String revieweeName;
    private LocalDate dueDate;
    private String status;
}
