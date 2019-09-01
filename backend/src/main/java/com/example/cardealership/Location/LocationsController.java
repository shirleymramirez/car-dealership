package com.example.cardealership.Location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/locations")
public class LocationsController {

    @Autowired
    private final LocationsRepository locationsRepository;

    public LocationsController(LocationsRepository locationsRepository) {
        this.locationsRepository = locationsRepository;
    }

    @PostMapping
    public Location addOneLocation(@RequestBody Location location) {
        System.out.println(location);
        return locationsRepository.save(location);
    }

    @GetMapping
    public Map<String, Iterable<Location>> getAllLocations() {
        HashMap<String, Iterable<Location>> allLocation = new HashMap<>();
        allLocation.put("locations", this.locationsRepository.findAll());
        return allLocation;
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

