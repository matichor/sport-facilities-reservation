package com.reservation.sport.domain;


import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name="reservation")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name="reservation_date")
    private LocalDate reservationDate;

    @Column(name="time_from")
    private LocalTime timeFrom;

    @Column(name="time_till")
    private LocalTime timeTill;

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

    public LocalDate getReservationDate() {
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

    public LocalTime getTimeTill() {
        return timeTill;
    }

    public void setTimeTill(LocalTime timeTill) {
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
