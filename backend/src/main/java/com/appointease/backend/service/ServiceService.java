package com.appointease.backend.service;

import com.appointease.backend.entity.Service;
import com.appointease.backend.repository.ServiceRepository;
//import org.springframework.stereotype.Service;

import java.util.List;

@org.springframework.stereotype.Service
public class ServiceService {

    private final ServiceRepository serviceRepository;

    public ServiceService(ServiceRepository serviceRepository){
        this.serviceRepository = serviceRepository;
    }

    public Service createService(Service service){
        return serviceRepository.save(service);
    }

    public List<Service> getAllServices() {
        return serviceRepository.findAll();
    }
}
