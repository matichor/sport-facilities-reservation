package com.reservation.sport.repository;

import com.reservation.sport.domain.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository  extends JpaRepository<Reservation, Long> {

}
