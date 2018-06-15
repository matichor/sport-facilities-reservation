package com.reservation.sport.domain;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name="reservation")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name="reservation_date")
    private LocalDate reservation_date;

    @Column(name="time_from")
    private LocalDateTime timeFrom;

    @Column(name="time_till")
    private LocalDateTime timeTill;

    @ManyToOne
    @JoinColumn(name = "object_definition_id")
    private ObjectDefinition objectDefinition;

    @Column(name = "user_id")
    private Long userId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getReservation_date() {
        return reservation_date;
    }

    public void setReservation_date(LocalDate reservation_date) {
        this.reservation_date = reservation_date;
    }

    public LocalDateTime getTimeFrom() {
        return timeFrom;
    }

    public void setTimeFrom(LocalDateTime timeFrom) {
        this.timeFrom = timeFrom;
    }

    public LocalDateTime getTimeTill() {
        return timeTill;
    }

    public void setTimeTill(LocalDateTime timeTill) {
        this.timeTill = timeTill;
    }

    public ObjectDefinition getObjectDefinition() {
        return objectDefinition;
    }

    public void setObjectDefinition(ObjectDefinition objectDefinition) {
        this.objectDefinition = objectDefinition;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
