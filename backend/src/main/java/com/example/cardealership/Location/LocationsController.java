package com.example.cardealership.Location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
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

    @DeleteMapping("/{id}")
    public Location deleteOneLocation(@PathVariable long id) {
        Location removedLocation = locationsRepository.findById(id).get();
        locationsRepository.deleteById(id);
        return removedLocation;
    }
}
