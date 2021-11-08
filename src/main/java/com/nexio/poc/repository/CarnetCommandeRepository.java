package com.nexio.poc.repository;

import com.nexio.poc.domain.CarnetCommande;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the CarnetCommande entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CarnetCommandeRepository extends JpaRepository<CarnetCommande, Long> {
}
