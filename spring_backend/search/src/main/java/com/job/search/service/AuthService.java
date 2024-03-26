package com.job.search.service;

import com.job.search.dto.request.LoginRequest;
import com.job.search.dto.request.RegisterRequest;
import com.job.search.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);
    String createAdmin();
}
