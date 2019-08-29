package com.example.cardealership.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
public class UsersController {

    @Autowired
    private final UsersRepository usersRepository;

    public UsersController(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @PostMapping("users")
    public User addOneUser(@RequestBody User user) {
        System.out.println(user);
        return usersRepository.save(user);
    }

    @PostMapping("users/login")
    public User userLogin(@RequestBody HashMap<String, String> creds) {
        User user = usersRepository.findByEmail(creds.get("email"));
        return user;
    }

}
