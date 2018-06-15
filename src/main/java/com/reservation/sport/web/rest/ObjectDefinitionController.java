package com.reservation.sport.web.rest;

import com.reservation.sport.domain.ObjectDefinition;
import com.reservation.sport.repository.ObjectDefinitionRepository;
import com.reservation.sport.service.ObjectDefinitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ObjectDefinitionController {

    @Autowired
    private ObjectDefinitionService objectDefinitionService;

    @GetMapping("/objectdefinitions")
    public List<ObjectDefinition> getObjectDefinitions(String name, String address, Long objectTypeId) {
        return  objectDefinitionService.getObjectDefinition(name, address, objectTypeId);
    }
}
