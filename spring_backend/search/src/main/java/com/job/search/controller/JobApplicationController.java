package com.job.search.controller;

import com.job.search.model.JobApplication;
import com.job.search.service.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/job/applications")
public class JobApplicationController {

    private final JobApplicationService jobApplicationService;

    @Autowired
    public JobApplicationController(JobApplicationService jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }

    @PostMapping("/apply/{jobId}")
    public JobApplication applyToJob(@PathVariable Long jobId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Long userId = getUserIdFromAuthentication(authentication); // Custom method to get userId
        JobApplication application = new JobApplication();
        application.setUserId(userId);
        application.setJobId(jobId);
        // Set other properties of the application as needed
        return jobApplicationService.applyToJob(application);
    }

    @GetMapping("/user")
    public Iterable<JobApplication> getApplicationsForCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Long userId = getUserIdFromAuthentication(authentication); // Custom method to get userId
        return jobApplicationService.getApplicationsByUserId(userId);
    }

    // You can add more endpoints as needed for managing applications, such as updating or deleting applications.

    private Long getUserIdFromAuthentication(Authentication authentication) {
        // Custom logic to retrieve userId from Authentication object
        // Replace this with your actual implementation
        return 1L; // Example value
    }
}
