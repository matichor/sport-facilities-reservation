package com.reservation.sport.service.dto;

import com.reservation.sport.domain.Reservation;

import java.time.LocalDate;
import java.time.LocalTime;

public class ReservationDTO {

    public ReservationDTO(Reservation reservation) {
        this.id = reservation.getId();
        this.reservationDate = reservation.getReservationDate();
        this.timeFrom = reservation.getTimeFrom();
        this.status = "SUCCESS";
    }

    private Long id;

    private LocalDate reservationDate;

    private LocalTime timeFrom;

    private String status = "SUCCESS";

    private String message = "";

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate reservationDate() {
        return reservationDate;
    }

    public void setReservationDate(LocalDate reservationDate) {
        this.reservationDate = reservationDate;
    }

    public LocalTime getTimeFrom() {
        return timeFrom;
    }

    public void setTimeFrom(LocalTime timeFrom) {
        this.timeFrom = timeFrom;
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
