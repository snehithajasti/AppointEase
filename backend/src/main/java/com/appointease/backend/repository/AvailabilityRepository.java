package com.appointease.backend.repository;

import com.appointease.backend.entity.Availability;
import com.appointease.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.DayOfWeek;
import java.util.Optional;

public interface AvailabilityRepository extends JpaRepository<Availability, Long> {
    Optional<Availability> findByProviderAndDayOfWeek(
            User provider,
            DayOfWeek dayOfWeek
    );
}
