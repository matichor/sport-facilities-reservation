package com.reservation.sport.service;

import com.reservation.sport.domain.ObjectDefinition;
import com.reservation.sport.domain.Reservation;
import com.reservation.sport.repository.ObjectDefinitionRepository;
import com.reservation.sport.repository.ReservationRepository;
import com.reservation.sport.repository.UserRepository;
import com.reservation.sport.security.SecurityUtils;
import com.reservation.sport.service.dto.ReservationDTO;
import io.undertow.util.BadRequestException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;

    private final ObjectDefinitionRepository objectDefinitionRepository;

    private final UserRepository userRepository;

    public ReservationService(ReservationRepository reservationRepository, ObjectDefinitionRepository objectDefinitionRepository, UserRepository userRepository) {
        this.reservationRepository = reservationRepository;
        this.objectDefinitionRepository = objectDefinitionRepository;
        this.userRepository = userRepository;
    }

    public List<String> getAvailableDates(){
        List<String> availableDates = new ArrayList<>();
        LocalDateTime localDateTime = LocalDateTime.now();
        for(int i=0; i<30; i++){
            availableDates.add(localDateTime.plusDays(i).format(DateTimeFormatter.ISO_LOCAL_DATE));
        }
        return availableDates;
    }

    public List<String> getAvailableHours(LocalDate reservationDate, Long objectDefinitionId){

        ObjectDefinition objectDefinition = objectDefinitionRepository.findOne(objectDefinitionId);
        List<Reservation> reservations = reservationRepository.findAllByReservationDateAndObjectDefinition(reservationDate, objectDefinition);
        List<String> reservedHours = reservations.stream()
            .map(Reservation::getTimeFrom)
            .map(date -> date.format(DateTimeFormatter.ISO_LOCAL_TIME))
            .collect(Collectors.toList());
        List<String> allHours = getAllHours(objectDefinition);
        List<String> availableHours = allHours.stream()
            .filter(hour -> !reservedHours.contains(hour))
            .collect(Collectors.toList());
        return availableHours;
    }

    private List<String> getAllHours(ObjectDefinition objectDefinition){
        List<String> allHours = new ArrayList<>();
        LocalTime incrementedHour = objectDefinition.getStartHour();
        while(incrementedHour.isBefore(objectDefinition.getEndHour())){
            allHours.add(incrementedHour.format(DateTimeFormatter.ISO_LOCAL_TIME));
            incrementedHour = incrementedHour.plusMinutes(60);
        }
        return allHours;
    }

    public ReservationDTO saveReservation(LocalDate selectedDate, LocalTime selectedTime, Long objectDefinitionId) throws BadRequestException {
        if(reservationRepository.findByReservationDateAndTimeFrom(selectedDate, selectedTime).isPresent()){
            throw new BadRequestException("This hour is already reservated");
        }
        Long principalUserId = userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin().get()).get().getId();
        ObjectDefinition objectDefinition = objectDefinitionRepository.findOne(objectDefinitionId);
        Reservation reservation = new Reservation();
        reservation.setReservationDate(selectedDate);
        reservation.setTimeFrom(selectedTime);
        reservation.setObjectDefinition(objectDefinition);
        reservation.setUserId(principalUserId);
        reservation = reservationRepository.save(reservation);
        return new ReservationDTO(reservation);
    }
}
