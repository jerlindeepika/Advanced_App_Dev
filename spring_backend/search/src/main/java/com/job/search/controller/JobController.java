package com.job.search.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.job.search.model.Job;
import com.job.search.service.JobService;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired
    JobService jobService;

    @GetMapping("getall")
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

     @GetMapping("/{id}")
    public Job getJobById(@PathVariable("id") Long id) {
        return jobService.getJobById(id);
    }

    @PostMapping("/post")
    public Job addJob(@RequestBody Job job) {
        return jobService.addJob(job);
    }

    @PutMapping("/{id}")
    public Job updateJob(@PathVariable("id") Long id, @RequestBody Job job) {
        job.setId(id); 
        return jobService.updateJob(job);
    }

    @DeleteMapping("/{id}")
    public void deleteJob(@PathVariable("id") Long id) {
        jobService.deleteJob(id);
    }

    @DeleteMapping("/deleteall")
    public void deleteAllJobs() {
        jobService.deleteAllJobs();
    }
    
}
