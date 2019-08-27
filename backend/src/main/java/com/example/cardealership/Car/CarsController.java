package com.example.cardealership.Car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
public class CarsController {

    @Autowired
    private final CarsRepository carsRepository;

    public CarsController(CarsRepository carsRepository) {
        this.carsRepository = carsRepository;
    }

    @PostMapping("cars")
    public Car addOneCar(@RequestBody Car car) {
        System.out.println(car);
        return carsRepository.save(car);
    }

    @GetMapping("cars")
    public Map<String, Iterable<Car>> getAllCars() {
        HashMap<String, Iterable<Car>> allCars = new HashMap<>();
        allCars.put("cars", this.carsRepository.findAll());
        return allCars;
    }

//    @PatchMapping("cars/{id}")
//    public Car updateCar(@PathVariable Long id, @RequestBody Car updateCar) {
//        Car car = carsRepository.findOne(id);
//    }

//    @DeleteMapping("cars/{id}")
//    public Map<String, Object> deleteCar(@PathVariable Long id) {
//        carsRepository.delete(id);
//
//        HashMap<String, Object> result = new HashMap<>();
//        result.put("count", carsRepository.count());
//        return result;
//    }
}
