package com.job.search.service.impl;

import com.job.search.model.User;
import com.job.search.repo.UserRepo;
import com.job.search.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepo userRepository;

    @Autowired
    public UserServiceImpl(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    @SuppressWarnings("null")
    @Override
    public User addUser(User newUser) {
        return userRepository.save(newUser);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @SuppressWarnings("null")
    @Override
    public User getUserById(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        return userOptional.orElse(null);
    }

    @SuppressWarnings("null")
    @Override
    public User updateUser(Long userId, User updatedUser) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            updatedUser.setUid(userId); // Ensure ID is set correctly
            return userRepository.save(updatedUser);
        } else {
            return null; // User not found
        }
    }

    @SuppressWarnings("null")
    @Override
    public boolean deleteUser(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            userRepository.deleteById(userId);
            return true;
        } else {
            return false; // User not found
        }
    }
}
