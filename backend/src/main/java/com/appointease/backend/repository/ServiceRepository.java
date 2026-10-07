package com.appointease.backend.repository;

import com.appointease.backend.entity.Service;
import com.appointease.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServiceRepository extends JpaRepository<Service, Long> {
    List<Service> findByProvider(User provider);
}
