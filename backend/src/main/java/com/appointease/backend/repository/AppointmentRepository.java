package com.appointease.backend.repository;

import com.appointease.backend.entity.Appointment;
import com.appointease.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByService_ProviderAndAppointmentDate(
            User provider,
            LocalDate appointmentDate
    );

    List<Appointment> findByCustomer(User customer);

    List<Appointment> findByService_Provider(User provider);
}
