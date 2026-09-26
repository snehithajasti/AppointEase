package com.appointease.backend.controller;

import com.appointease.backend.entity.Appointment;
import com.appointease.backend.service.AppointmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
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
    public List<Appointment> getAppointmentsByCustomer(
            @PathVariable Long customerId){

        return appointmentService.getAppointmentsByCustomer(customerId);
    }

    @GetMapping("/provider/{providerId}")
    public List<Appointment> getAppointmentsByProvider(
            @PathVariable Long providerId){

        return  appointmentService.getAppointmentsByProvider(providerId);
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
