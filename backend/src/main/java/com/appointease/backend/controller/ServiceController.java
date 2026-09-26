package com.appointease.backend.controller;

import com.appointease.backend.entity.Service;
import com.appointease.backend.service.ServiceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
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
    public List<Service> getAllServices(){
        return serviceService.getAllServices();
    }
}
