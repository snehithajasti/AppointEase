package com.appointease.backend.controller;

import com.appointease.backend.dto.AppointmentResponseDTO;
import com.appointease.backend.entity.Appointment;
import com.appointease.backend.service.AppointmentService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:5173")
public class AppointmentController {

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService){
        this.appointmentService = appointmentService;
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment){
        return appointmentService.createAppointment(appointment);
    }

    @GetMapping
    public List<Appointment> getAllAppointments(){
        return appointmentService.getAllAppointments();
    }

    @GetMapping("/customer/{customerId}")
    public List<AppointmentResponseDTO> getAppointmentsByCustomer(
            @PathVariable Long customerId){

        return appointmentService.getAppointmentDTOsByCustomer(customerId);
    }

    @GetMapping("/provider/{providerId}")
    public List<AppointmentResponseDTO> getAppointmentsByProvider(
            @PathVariable Long providerId){

        return  appointmentService.getAppointmentDTOsByProvider(providerId);
    }

    @PutMapping("/{appointmentId}/confirm")
    public Appointment confirmAppointment(
            @PathVariable Long appointmentId){
        return appointmentService.confirmAppointment(appointmentId);
    }

    @PutMapping("/{appointmentId}/complete")
    public Appointment completeAppointment(
            @PathVariable Long appointmentId){
        return appointmentService.completeAppointment(appointmentId);
    }

    @PutMapping("/{appointmentId}/cancel")
    public Appointment cancelAppointment(
            @PathVariable Long appointmentId){
        return appointmentService.cancelAppointment(appointmentId);
    }
}
