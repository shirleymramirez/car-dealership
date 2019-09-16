package com.example.cardealership.Location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/locations")
public class LocationsController {

    @Autowired
    private final LocationsRepository locationsRepository;

    public LocationsController(LocationsRepository locationsRepository) {
        this.locationsRepository = locationsRepository;
    }

    @PostMapping("/new")
    public Location addOneLocation(@RequestBody Location location) {
        System.out.println(location);
        return locationsRepository.save(location);
    }

    @GetMapping
    public Iterable<Location> getAllLocations() {
        return this.locationsRepository.findAll();
    }

    @GetMapping("/{id}")
    public Location getOneLocation(@PathVariable Long id) {
        Location getLocationById = locationsRepository.findById(id).get();
        locationsRepository.getOne(id);
        return getLocationById;
    }

//    @PatchMapping("/{id}")
//    public Location updateOneLocation(@PathVariable long id, @RequestBody Location location) {
//        Location updateLocation = locationsRepository.findById(id).get();
//        locationsRepository.save(location);
//        return updateLocation;
//    }

    @PatchMapping("/edit/{id}")
    public Location updateOneLocation(@PathVariable long id, @RequestBody Location location) {
        Location updateLocation = locationsRepository.findById(id).get();
        if(location.getName() != null) {
            updateLocation.setName(location.getName());
        }
        if(location.getAddress() != null) {
            updateLocation.setAddress(location.getAddress());
        }
        return locationsRepository.save(updateLocation);
    }

    @DeleteMapping("/{id}")
    public Location deleteOneLocation(@PathVariable long id) {
        Location removedLocation = locationsRepository.findById(id).get();
        locationsRepository.deleteById(id);
        return removedLocation;
    }

}

