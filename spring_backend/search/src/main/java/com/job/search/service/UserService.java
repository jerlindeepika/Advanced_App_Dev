package com.job.search.service;

import com.job.search.model.User;

import java.util.List;

public interface UserService {

    User addUser(User newUser);

    List<User> getAllUsers();

    User getUserById(Long userId);

    User updateUser(Long userId, User updatedUser);

    boolean deleteUser(Long userId);
}
