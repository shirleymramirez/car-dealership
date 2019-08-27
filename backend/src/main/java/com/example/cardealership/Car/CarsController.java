package com.example.cardealership.Car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/cars")
public class CarsController {

    @Autowired
    private final CarsRepository carsRepository;

    public CarsController(CarsRepository carsRepository) {
        this.carsRepository = carsRepository;
    }

    @PostMapping
    public Car addOneCar(@RequestBody Car car) {
        System.out.println(car);
        return carsRepository.save(car);
    }

    @GetMapping
    public Map<String, Iterable<Car>> getAllCars() {
        HashMap<String, Iterable<Car>> allCars = new HashMap<>();
        allCars.put("cars", this.carsRepository.findAll());
        return allCars;
    }

    // Update existing status
    // Make sure to send ENTIRE status, not just pieces of it
    @PatchMapping
    public Car updateOneCar(@RequestBody Car updatedCar) {
        return carsRepository.save(updatedCar);
    }

//    @PatchMapping("/{id}")
//    public Car updateOneCar(@PathVariable Long id, @RequestBody Car car) {
//        Car updatedCar = carsRepository.findById(id).get();
//        carsRepository.save(car);
//        return updatedCar;
//    }

    @DeleteMapping("/{id}")
    public Car deleteOneCar(@PathVariable Long id) {
        Car removedCar = carsRepository.findById(id).get();
        carsRepository.deleteById(id);
        return removedCar;
    }
}
