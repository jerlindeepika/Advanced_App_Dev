package com.job.search.repo;

import com.job.search.model.Job;
import org.springframework.data.repository.CrudRepository;


public interface JobRepo extends CrudRepository<Job, Long>{
}


