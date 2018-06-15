package com.reservation.sport.service;

import com.reservation.sport.domain.ObjectDefinition;
import com.reservation.sport.repository.ObjectDefinitionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ObjectDefinitionService {

    @Autowired
    private ObjectDefinitionRepository objectDefinitionRepository;

    public List<ObjectDefinition> getObjectDefinition(String name, String address, Long objectDefinitionId){
        return objectDefinitionRepository.findDataNameAndAddressAndObjectType(name, address, objectDefinitionId);
    }

}
