package com.job.search.repo;

import com.job.search.model.JobApplication;
import org.springframework.data.repository.CrudRepository;

public interface JobApplicationRepo extends CrudRepository<JobApplication, Long> {
    
    Iterable<JobApplication> findAllByUserId(Long userId);
    
    
}
