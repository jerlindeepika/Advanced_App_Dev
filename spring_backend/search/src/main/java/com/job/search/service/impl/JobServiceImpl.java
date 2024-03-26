package com.job.search.service.impl;

import com.job.search.model.Job;
import com.job.search.repo.JobRepo;
import com.job.search.service.JobService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService {

    private final JobRepo jobRepo;

    @Autowired
    public JobServiceImpl(JobRepo jobRepo) {
        this.jobRepo = jobRepo;
    }

    @Override
    public List<Job> getAllJobs() {
        List<Job> jobs = new ArrayList<>();
        jobRepo.findAll().forEach(jobs::add);
        return jobs;
    }

    @Override
    public Job getJobById(Long id) {
        Optional<Job> jobOptional = jobRepo.findById(id);
        if (!jobOptional.isPresent()) {
            throw new RuntimeException("Job not found for id " + id);
        }
        return jobOptional.get();
    }

    @Override
    public Job addJob(Job job) {
        return jobRepo.save(job);
    }

    @Override
    public Job updateJob(Job job) {
        if (job.getId() != null && jobRepo.existsById(job.getId())) {
            return jobRepo.save(job);
        } else {
            throw new RuntimeException("Job not found for id " + job.getId());
        }
    }

    @Override
    public void deleteJob(Long id) {
        jobRepo.deleteById(id);
    }

    @Override
    public void deleteAllJobs() {
        jobRepo.deleteAll();
    }
}
