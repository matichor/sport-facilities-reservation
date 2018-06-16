package com.reservation.sport.service.dto;

import java.util.ArrayList;
import java.util.List;

public class ReservationHoursDTO {
    public ReservationHoursDTO(List<String> availableHours, String status, String message) {
        this.availableHours = availableHours;
        this.status = status;
        this.message = message;
    }

    private List<String> availableHours = new ArrayList<>();
    private String status = "SUCCESS";
    private String message = "";

    public List<String> getAvailableHours() {
        return availableHours;
    }

    public void setAvailableHours(List<String> availableHours) {
        this.availableHours = availableHours;
    }

        public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
