package com.appointease.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.appointease.backend.entity.Availability;
import com.appointease.backend.service.AvailabilityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/availability")
@CrossOrigin(origins = "http://localhost:5173")
public class AvailabilityController {

    private final AvailabilityService availabilityService;

    public AvailabilityController(AvailabilityService availabilityService){
        this.availabilityService=availabilityService;
    }

    @PostMapping
    public Availability createAvailability(@RequestBody Availability availability){
        return availabilityService.createAvailability(availability);
    }

    @GetMapping
    public List<Availability> getAllAvailabilities(){
        return availabilityService.getAllAvailabilities();
    }

    @GetMapping("/provider/{providerId}")
    public List<Availability> getAvailabilityByProvider(
            @PathVariable Long providerId
    ){
        return availabilityService.getAvailabilityByProvider(providerId);
    }

    @PutMapping("/{availabilityId}")
    public Availability updateAvailability(
            @PathVariable Long availabilityId,
            @RequestBody Availability availability
    ){
        return availabilityService.updateAvailability(
                availabilityId,
                availability
        );
    }

    @DeleteMapping("/{availabilityId}")
    public void deleteAvailability(
            @PathVariable Long availabilityId
    ){
        availabilityService.deleteAvailability(availabilityId);
    }
}
