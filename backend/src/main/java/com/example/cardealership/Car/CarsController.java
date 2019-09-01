package com.example.cardealership.Car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
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
    public Iterable<Car> getAllCars() {
        return this.carsRepository.findAll();
    }

    @GetMapping("/{id}")
    public Car getOneCar(@PathVariable Long id) {
        Car getCarById = carsRepository.findById(id).get();
        carsRepository.getOne(id);
        return getCarById;
    }

    // Update existing status
    // Make sure to send ENTIRE status, not just pieces of it
    @PatchMapping("/{id}")
        public Car updateOneLocation(@PathVariable long id, @RequestBody Car car) {
            Car updateCar= carsRepository.findById(id).get();
            if(car.getVin() != null) {
                updateCar.setVin(car.getVin());
            }
            if(car.getMake() != null) {
                updateCar.setMake(car.getMake());
            }
            if(car.getMiles() != 0) {
                updateCar.setMiles(car.getMiles());
            }
            if(car.getModel() != null) {
                updateCar.setModel(car.getModel());
            }
            if(car.getPrice() != 0) {
                updateCar.setPrice(car.getPrice());
            }
            if(car.getPhoto_url() != null) {
                updateCar.setPhoto_url(car.getPhoto_url());
            }
            if(car.getYear() != 0) {
                updateCar.setYear(car.getYear());
            }
            if(car.getLocation_id() != 0) {
                updateCar.setLocation_id(car.getLocation_id());
            }
            return carsRepository.save(updateCar);
        }

    @DeleteMapping("/{id}")
    public Car deleteOneCar(@PathVariable Long id) {
        Car removedCar = carsRepository.findById(id).get();
        carsRepository.deleteById(id);
        return removedCar;
    }
}
