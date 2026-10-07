package com.appointease.backend.controller;

import com.appointease.backend.dto.ServiceResponseDTO;
import com.appointease.backend.entity.Service;
import com.appointease.backend.service.ServiceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:5173")
public class ServiceController {

    private final ServiceService serviceService;

    public ServiceController(ServiceService serviceService){
        this.serviceService = serviceService;
    }

    @PostMapping
    public Service createService(@RequestBody Service service){
        return  serviceService.createService(service);
    }

    @GetMapping
    public List<ServiceResponseDTO> getAllServices(){
        return serviceService.getAllServices();
    }

    @GetMapping("/provider/{providerId}")
    public List<ServiceResponseDTO> getServicesByProvider(
            @PathVariable Long providerId
    ){
        return serviceService.getServicesByProvider(providerId);
    }

    @GetMapping("/{serviceId}")
    public ServiceResponseDTO getServiceById(@PathVariable Long serviceId){
        return serviceService.getServiceById(serviceId);
    }

    @PutMapping("/{serviceId}")
    public ServiceResponseDTO updateService(
            @PathVariable Long serviceId,
            @RequestBody Service service
    ){
        return serviceService.updateService(serviceId, service);
    }

    @DeleteMapping("/{serviceId}")
    public void deleteService(@PathVariable Long serviceId){
        serviceService.deleteService(serviceId);
    }
}
