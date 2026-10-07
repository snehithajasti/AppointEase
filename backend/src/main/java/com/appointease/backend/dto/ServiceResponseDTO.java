package com.appointease.backend.dto;

import java.math.BigDecimal;

public class ServiceResponseDTO {

    private Long id;
    private String name;
    private String category;
    private String description;
    private BigDecimal price;
    private Integer duration;
    private String provider;
    private Long providerId;

    public ServiceResponseDTO() {
    }

    public ServiceResponseDTO(
            Long id,
            String name,
            String category,
            String description,
            BigDecimal price,
            Integer duration,
            String provider,
            Long providerId
    ) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.duration = duration;
        this.provider = provider;
        this.providerId = providerId;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory(){
        return category;
    }

    public String getDescription(){
        return description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public Integer getDuration(){
        return duration;
    }

    public String getProvider() {
        return provider;
    }

    public Long getProviderId() {
        return providerId;
    }
}
