package com.job.search.service.impl;

import com.job.search.model.JobApplication;
import com.job.search.repo.JobApplicationRepo;
import com.job.search.service.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobApplicationServiceImpl implements JobApplicationService {

    private final JobApplicationRepo jobApplicationRepo;

    @Autowired
    public JobApplicationServiceImpl(JobApplicationRepo jobApplicationRepo) {
        this.jobApplicationRepo = jobApplicationRepo;
    }

    @Override
    public JobApplication applyToJob(JobApplication application) {
        // Additional logic can be added here, such as validation
        return jobApplicationRepo.save(application);
    }

    @Override
    public Iterable<JobApplication> getApplicationsByUserId(Long userId) {
        return jobApplicationRepo.findAllByUserId(userId);
    }

}
