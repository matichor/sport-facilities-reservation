package com.reservation.sport.web.rest;

import com.reservation.sport.domain.ObjectDefinition;
import com.reservation.sport.repository.ObjectDefinitionRepository;
import com.reservation.sport.service.ObjectDefinitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/objectdefinitionsbyuser")
    public List<ObjectDefinition> getObjectDefinitionsByUser(Long userId) {
        return  objectDefinitionService.getObjectDefinitionByUser(userId);
    }

    @PostMapping("/objectdefinitions")
    public void saveObjectDefinition(@RequestBody ObjectDefinition objectDefinition){
        objectDefinitionService.saveObjectDefinition(objectDefinition);
    }
}
