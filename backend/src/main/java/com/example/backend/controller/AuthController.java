//package com.example.backend.controller;
//
//import com.example.backend.model.User;
//import com.example.backend.service.UserService;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/auth")
//@CrossOrigin(origins = "*")
//public class AuthController {
//
//    private final UserService service;
//
//    public AuthController(UserService service) {
//        this.service = service;
//    }
//
//    @GetMapping("/test")
//    public String test() {
//        return "Backend is working!";
//    }
//
//    @PostMapping("/register")
//    public ResponseEntity<String> register(@RequestBody User user) {
//        service.register(user);
//        return ResponseEntity.ok("User Registered Successfully");
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody Map<String, String> req) {
//        String email = req.get("email");
//        String password = req.get("password");
//        User user = service.login(email, password);
//        return ResponseEntity.ok("Login successful! Welcome " + user.getName());
//    }
//}
package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserService service;

    public AuthController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        service.register(user);
        return ResponseEntity.ok("User Registered Successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> req) {

        String username = req.get("username");
        String password = req.get("password");

        User user = service.login(username, password);

        Map<String, Object> response = new HashMap<>();
        response.put("username", user.getUsername());
        response.put("role", user.getRole());
        response.put("loginCount", user.getLoginCount());
        response.put("lastLogin", user.getLastLogin());

        return ResponseEntity.ok(response);
    }

    @GetMapping("/stats")
    public ResponseEntity<?> stats() {
        Map<String, Object> map = new HashMap<>();
        map.put("totalUsers", service.countUsers());
        map.put("totalLogins", service.totalLogins());
        return ResponseEntity.ok(map);
    }

    @GetMapping("/test")
    public String test() {
        return "Backend is working!";
    }
}

