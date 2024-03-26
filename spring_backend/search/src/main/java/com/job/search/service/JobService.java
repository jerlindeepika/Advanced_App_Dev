package com.job.search.service;

import com.job.search.model.Job;
import java.util.List;

public interface JobService {
    List<Job> getAllJobs();
    Job getJobById(Long id);
    Job addJob(Job job);
    Job updateJob(Job job);
    void deleteJob(Long id);
    void deleteAllJobs();
}
