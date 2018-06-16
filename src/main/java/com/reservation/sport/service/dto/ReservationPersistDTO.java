package com.reservation.sport.service.dto;

import java.time.LocalDate;

public class ReservationPersistDTO {

    private Long objectDefinitionId;
    private LocalDate selectedDate;
    private String selectedHour;
    private UserInfoDTO userInfoDTO;

    public LocalDate getSelectedDate() {
        return selectedDate;
    }

    public void setSelectedDate(LocalDate selectedDate) {
        this.selectedDate = selectedDate;
    }

    public String getSelectedHour() {
        return selectedHour;
    }

    public void setSelectedHour(String selectedHour) {
        this.selectedHour = selectedHour;
    }

    public UserInfoDTO getUserInfoDTO() {
        return userInfoDTO;
    }

    public void setUserInfoDTO(UserInfoDTO userInfoDTO) {
        this.userInfoDTO = userInfoDTO;
    }

    public Long getObjectDefinitionId() {
        return objectDefinitionId;
    }

    public void setObjectDefinitionId(Long objectDefinitionId) {
        this.objectDefinitionId = objectDefinitionId;
    }
}
