package com.reservation.sport.web.rest;

import com.reservation.sport.domain.ObjectType;
import com.reservation.sport.repository.ObjectTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ObjectTypeController {

    @Autowired
    private ObjectTypeRepository objectTypeRepository;

    @GetMapping("/objecttypes")
    public List<ObjectType> getObjectTypes(){
        return objectTypeRepository.findAll();
    }

}
