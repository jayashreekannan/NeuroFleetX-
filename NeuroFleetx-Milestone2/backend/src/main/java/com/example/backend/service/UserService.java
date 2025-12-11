//package com.example.backend.service;
//
//import com.example.backend.model.User;
//import com.example.backend.repository.UserRepository;
//import org.springframework.stereotype.Service;
//
//@Service
//public class UserService {
//
//    private final UserRepository repo;
//
//    public UserService(UserRepository repo) {
//        this.repo = repo;
//    }
//
//    public void register(User user) {
//        // Optional: Check if user already exists
//        if(repo.findByEmail(user.getEmail()).isPresent()) {
//            throw new RuntimeException("Email already registered");
//        }
//        repo.save(user);
//    }
//
//    public User login(String email, String password) {
//        return repo.findByEmailAndPassword(email, password)
//                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
//    }
//}
package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User register(User user) {
        if (repo.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered");
        }
        return repo.save(user);
    }

    public User login(String username, String password) {
        User user = repo.findByUsername(username);

        if (user == null)
            throw new RuntimeException("User not found");

        if (!user.getPassword().equals(password))
            throw new RuntimeException("Incorrect password");

        // update stats
        user.setLoginCount(user.getLoginCount() + 1);
        user.setLastLogin(LocalDateTime.now());

        return repo.save(user);
    }

    public long countUsers() {
        return repo.count();
    }

    public long totalLogins() {
        List<User> users = repo.findAll();
        return users.stream().mapToLong(User::getLoginCount).sum();
    }
}
