package com.job.search.service;

import com.job.search.model.JobApplication;

public interface JobApplicationService {
    
    JobApplication applyToJob(JobApplication application);
    
    Iterable<JobApplication> getApplicationsByUserId(Long userId);
    
    
}
