package com.appointease.backend.service;

import com.appointease.backend.entity.Availability;
import com.appointease.backend.entity.User;
import com.appointease.backend.repository.AvailabilityRepository;
import com.appointease.backend.repository.UserRepository;

import java.util.List;

@org.springframework.stereotype.Service
public class AvailabilityService {

    private final AvailabilityRepository availabilityRepository;
    private final UserRepository userRepository;

    public AvailabilityService(
            AvailabilityRepository availabilityRepository,
            UserRepository userRepository
    ){
        this.availabilityRepository = availabilityRepository;
        this.userRepository = userRepository;
    }

    public Availability createAvailability(Availability availability){
        return availabilityRepository.save(availability);
    }

    public List<Availability> getAllAvailabilities(){
        return availabilityRepository.findAll();
    }

    public List<Availability> getAvailabilityByProvider(Long providerId){
        User provider = userRepository.findById(providerId)
                .orElseThrow(() -> new RuntimeException("Provider not found"));

        return availabilityRepository.findByProvider(provider);
    }

    public Availability updateAvailability(
            Long availabilityId,
            Availability updatedAvailability
    ){
        Availability existingAvailability = availabilityRepository
                .findById(availabilityId)
                .orElseThrow(() -> new RuntimeException("Availability not found"));

        existingAvailability.setDayOfWeek(updatedAvailability.getDayOfWeek());
        existingAvailability.setStartTime(updatedAvailability.getStartTime());
        existingAvailability.setEndTime(updatedAvailability.getEndTime());

        return availabilityRepository.save(existingAvailability);
    }

    public void deleteAvailability(Long availabilityId){
        Availability existingAvailability = availabilityRepository
                .findById(availabilityId)
                .orElseThrow(() -> new RuntimeException("Availability not found"));

        availabilityRepository.delete(existingAvailability);
    }
}
