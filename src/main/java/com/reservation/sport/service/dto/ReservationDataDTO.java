package com.reservation.sport.service.dto;

    import java.util.ArrayList;
    import java.util.List;

public class ReservationDataDTO {

    public ReservationDataDTO(List<String> availableDates, String status, String message) {
        this.availableDates = availableDates;
        this.status = status;
        this.message = message;
    }

    private List<String> availableDates = new ArrayList<>();
    private String status = "SUCCESS";
    private String message = "";

    public List<String> getAvailableDates() {
        return availableDates;
    }

    public void setAvailableDates(List<String> availableDates) {
        this.availableDates = availableDates;
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
