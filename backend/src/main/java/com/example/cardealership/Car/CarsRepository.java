package com.example.cardealership.Car;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarsRepository extends JpaRepository<Car, Long> {
//    public Car findByEmail(String email, String password);
}
