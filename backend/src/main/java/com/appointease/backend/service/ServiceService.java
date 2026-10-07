package com.appointease.backend.service;

import com.appointease.backend.dto.ServiceResponseDTO;
import com.appointease.backend.entity.Service;
import com.appointease.backend.entity.User;
import com.appointease.backend.repository.ServiceRepository;
import com.appointease.backend.repository.UserRepository;
//import org.springframework.stereotype.Service;

import java.util.List;

@org.springframework.stereotype.Service
public class ServiceService {

    private final ServiceRepository serviceRepository;
    private final UserRepository userRepository;

    public ServiceService(
            ServiceRepository serviceRepository,
            UserRepository userRepository
    ){
        this.serviceRepository = serviceRepository;
        this.userRepository = userRepository;
    }

    public Service createService(Service service){
        return serviceRepository.save(service);
    }

    public List<ServiceResponseDTO> getAllServices() {
        return serviceRepository.findAll()
                .stream()
                .map(service -> new ServiceResponseDTO(
                        service.getId(),
                        service.getName(),
                        service.getCategory(),
                        service.getDescription(),
                        service.getPrice(),
                        service.getDuration(),
                        service.getProvider().getName(),
                        service.getProvider().getId()
                ))
                .toList();
    }

    public List<ServiceResponseDTO> getServicesByProvider(Long providerId){

        User provider = userRepository.findById(providerId)
                .orElseThrow(() -> new RuntimeException("Provider not found"));

        return serviceRepository.findByProvider(provider)
                .stream()
                .map(service -> new ServiceResponseDTO(
                        service.getId(),
                        service.getName(),
                        service.getCategory(),
                        service.getDescription(),
                        service.getPrice(),
                        service.getDuration(),
                        service.getProvider().getName(),
                        service.getProvider().getId()
                ))
                .toList();
    }

    public ServiceResponseDTO getServiceById(Long serviceId){
        Service service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service not found"));

        return new ServiceResponseDTO(
                service.getId(),
                service.getName(),
                service.getCategory(),
                service.getDescription(),
                service.getPrice(),
                service.getDuration(),
                service.getProvider().getName(),
                service.getProvider().getId()
        );
    }

    public ServiceResponseDTO updateService(Long serviceId, Service updatedService){

        Service existingService = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service not found"));

        existingService.setName(updatedService.getName());
        existingService.setCategory(updatedService.getCategory());
        existingService.setDescription(updatedService.getDescription());
        existingService.setPrice(updatedService.getPrice());
        existingService.setDuration(updatedService.getDuration());

        Service savedService = serviceRepository.save(existingService);

        return new ServiceResponseDTO(
                savedService.getId(),
                savedService.getName(),
                savedService.getCategory(),
                savedService.getDescription(),
                savedService.getPrice(),
                savedService.getDuration(),
                savedService.getProvider().getName(),
                savedService.getProvider().getId()
        );
    }

    public void deleteService(Long serviceId){
        Service existingService = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service not found"));

        serviceRepository.delete(existingService);
    }
}
