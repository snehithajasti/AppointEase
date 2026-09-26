package com.appointease.backend.service;

import com.appointease.backend.entity.Availability;
import com.appointease.backend.repository.AvailabilityRepository;

import java.util.List;

@org.springframework.stereotype.Service
public class AvailabilityService {

    private final AvailabilityRepository availabilityRepository;

    public AvailabilityService(AvailabilityRepository availabilityRepository){
        this.availabilityRepository = availabilityRepository;
    }

    public Availability createAvailability(Availability availability){
        return availabilityRepository.save(availability);
    }

    public List<Availability> getAllAvailabilities(){
        return availabilityRepository.findAll();
    }
}
