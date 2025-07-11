package com.cognizant.springsecurityjwt.controller;

import com.cognizant.springsecurityjwt.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @RequestMapping(value = "/authenticate", method = RequestMethod.GET)
    public ResponseEntity<?> generateToken(HttpServletRequest request) {
        System.out.println(">> /authenticate endpoint hit");

        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            System.out.println(">> Missing or invalid Authorization header");
            return ResponseEntity.status(401).body("Missing or invalid Authorization header");
        }

        String[] credentials = extractCredentials(authHeader);
        String username = credentials[0];
        String password = credentials[1];

        System.out.println(">> Decoded credentials: " + username + "/" + password);

        if (!("user".equals(username) && "pwd".equals(password))) {
            System.out.println(">> Invalid credentials");
            return ResponseEntity.status(403).body("Invalid credentials");
        }

        String token = jwtUtil.generateToken(username);
        System.out.println(">> Token generated: " + token);
        return ResponseEntity.ok("{\"token\":\"" + token + "\"}");
    }

    private String[] extractCredentials(String header) {
        String base64Credentials = header.substring("Basic ".length());
        byte[] decoded = Base64.getDecoder().decode(base64Credentials);
        return new String(decoded).split(":", 2);
    }
}
