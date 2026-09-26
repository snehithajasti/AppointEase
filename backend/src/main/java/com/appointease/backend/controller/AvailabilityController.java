package com.appointease.backend.controller;

import com.appointease.backend.entity.Availability;
import com.appointease.backend.service.AvailabilityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/availability")
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
}
