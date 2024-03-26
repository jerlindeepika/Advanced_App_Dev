package com.job.search.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class SearchController {

    @GetMapping("/hello")
    public String hello() {
        return "hello World !";
    }
    
}
