package com.appointease.backend.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

public class AppointmentResponseDTO {

    private Long id;
    private LocalDate appointmentDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private String status;

    private Long serviceId;
    private String serviceName;
    private String category;
    private String provider;

    private BigDecimal price;
    private Integer duration;

    public AppointmentResponseDTO() {
    }

    public AppointmentResponseDTO(
            Long id,
            LocalDate appointmentDate,
            LocalTime startTime,
            LocalTime endTime,
            String status,
            Long serviceId,
            String serviceName,
            String category,
            String provider,
            BigDecimal price,
            Integer duration) {
        this.id = id;
        this.appointmentDate = appointmentDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
        this.serviceId = serviceId;
        this.serviceName = serviceName;
        this.category = category;
        this.provider = provider;
        this.price = price;
        this.duration = duration;
    }

    public Long getId() {
        return id;
    }

    public LocalDate getAppointmentDate() {
        return appointmentDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public String getStatus() {
        return status;
    }

    public Long getServiceId() {
        return serviceId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public String getCategory() {
        return category;
    }

    public String getProvider() {
        return provider;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public Integer getDuration() {
        return duration;
    }
}
