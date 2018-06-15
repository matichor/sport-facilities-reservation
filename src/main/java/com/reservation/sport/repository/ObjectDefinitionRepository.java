package com.reservation.sport.repository;

import com.reservation.sport.domain.ObjectDefinition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ObjectDefinitionRepository extends JpaRepository<ObjectDefinition, Long> {

    @Query("select objectdefinition from ObjectDefinition objectdefinition where objectdefinition.name = :name or objectdefinition.address = :address or objectdefinition.objectType.id like :objectTypeId")
    List<ObjectDefinition> findDataNameAndAddressAndObjectType(@Param("name") String name, @Param("address") String address, @Param("objectTypeId") Long objectTypeId);
}
