package com.example.employee_management_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employee_management_system.entity.PerformanceReview;

@Repository
public interface PerformanceReviewRepository extends JpaRepository<PerformanceReview, Long> {
    
}
