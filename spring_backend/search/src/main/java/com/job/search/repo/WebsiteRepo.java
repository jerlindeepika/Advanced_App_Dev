package com.job.search.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.job.search.model.Website;

public interface WebsiteRepo extends JpaRepository<Website, Long>{
   
}
