package com.appointease.backend.service;

import com.appointease.backend.entity.*;
import com.appointease.backend.repository.AppointmentRepository;
import com.appointease.backend.repository.AvailabilityRepository;
import com.appointease.backend.repository.ServiceRepository;
import com.appointease.backend.repository.UserRepository;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@org.springframework.stereotype.Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final AvailabilityRepository availabilityRepository;
    private final UserRepository userRepository;
    private final ServiceRepository serviceRepository;


    public AppointmentService(
            AppointmentRepository appointmentRepository,
            AvailabilityRepository availabilityRepository,
            UserRepository userRepository,
            ServiceRepository serviceRepository
    ){
        this.appointmentRepository = appointmentRepository;
        this.availabilityRepository = availabilityRepository;
        this.userRepository = userRepository;
        this.serviceRepository = serviceRepository;
    }

    public Appointment createAppointment(Appointment appointment){
        User customer = userRepository
                .findById(appointment.getCustomer().getId())
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        Service service = serviceRepository
                .findById(appointment.getService().getId())
                .orElseThrow(() -> new RuntimeException("Service not found"));

        User provider = service.getProvider();

        LocalDate appointmentDate = appointment.getAppointmentDate();
        LocalTime startTime = appointment.getStartTime();
        LocalTime endTime = startTime.plusMinutes(service.getDuration());

        DayOfWeek dayOfWeek = appointmentDate.getDayOfWeek();

        Availability availability = availabilityRepository
                .findByProviderAndDayOfWeek(provider, dayOfWeek)
                .orElseThrow(() -> new RuntimeException("Provider is not available on this day"));

        if(startTime.isBefore(availability.getStartTime())
                || endTime.isAfter(availability.getEndTime())){
            throw new RuntimeException(
                    "Appointment time is outside provider availability"
            );
        }

        if(!startTime.isBefore(endTime)){
            throw new RuntimeException(
                    "Appointment start time must be before end time"
            );
        }

        List<Appointment> existingAppointments =
                appointmentRepository.findByService_ProviderAndAppointmentDate(
                        provider,
                        appointmentDate
                );
        for (Appointment existingAppointment : existingAppointments){
            if(existingAppointment.getStatus() == null || existingAppointment.getStatus().name().equals("CANCELLED")){
                continue;
            }
            boolean overlaps =
                    startTime.isBefore(existingAppointment.getEndTime())
                    && endTime.isAfter(existingAppointment.getStartTime());

            if (overlaps) {
                throw new RuntimeException(
                        "This time slot is already booked"
                );
            }
        }
        appointment.setCustomer(customer);
        appointment.setService(service);
        appointment.setEndTime(endTime);
        appointment.setCreatedAt(LocalDateTime.now());
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAllAppointments(){
        return appointmentRepository.findAll();
    }

    public List<Appointment> getAppointmentsByCustomer(Long customerId){
        User customer = userRepository
                .findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        return appointmentRepository.findByCustomer(customer);
    }

    public List<Appointment> getAppointmentsByProvider(Long providerId){
        User provider = userRepository
                .findById(providerId)
                .orElseThrow(() -> new RuntimeException("Provider not found"));

        return appointmentRepository.findByService_Provider(provider);
    }

    public Appointment confirmAppointment(Long appointmentId){

        Appointment appointment = appointmentRepository
                .findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        if (appointment.getStatus() != AppointmentStatus.PENDING){
            throw new RuntimeException(
                    "Only pending appointments can be confirmed"
            );
        }

        appointment.setStatus(AppointmentStatus.CONFIRMED);

        return appointmentRepository.save(appointment);
    }

    public Appointment completeAppointment(Long appointmentId){
        Appointment appointment = appointmentRepository
                .findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        if (appointment.getStatus() != AppointmentStatus.CONFIRMED){
            throw new RuntimeException(
                    "Only confirmed appointments can be completed"
            );
        }

        appointment.setStatus(AppointmentStatus.COMPLETED);

        return appointmentRepository.save(appointment);
    }

    public Appointment cancelAppointment(Long appointmentId){

        Appointment appointment = appointmentRepository
                .findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        if (appointment.getStatus() != AppointmentStatus.PENDING
                && appointment.getStatus() != AppointmentStatus.CONFIRMED){
            throw new RuntimeException(
                    "Only pending or confirmed appointments can be cancelled"
            );
        }

        appointment.setStatus(AppointmentStatus.CANCELLED);

        return appointmentRepository.save(appointment);
    }
}
