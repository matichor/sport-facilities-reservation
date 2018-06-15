package com.reservation.sport.repository;

import com.reservation.sport.domain.ObjectDefinition;
import com.reservation.sport.domain.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface ReservationRepository  extends JpaRepository<Reservation, Long> {
    List<Reservation> findAllByReservationDateAndObjectDefinition(LocalDate reservationDate, ObjectDefinition objectDefinition);
    Optional<Reservation> findByReservationDateAndTimeFrom(LocalDate date, LocalTime timeFrom);
    List<Reservation> findAllByUserIdOrderByReservationDate(Long userId);
    List<Reservation> findAllByObjectDefinitionOrderByReservationDate(ObjectDefinition objectDefinition);
}
