package com.nexio.poc.service;

import com.nexio.poc.domain.CarnetCommande;
import com.nexio.poc.repository.CarnetCommandeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link CarnetCommande}.
 */
@Service
@Transactional
public class CarnetCommandeService {

    private final Logger log = LoggerFactory.getLogger(CarnetCommandeService.class);

    private final CarnetCommandeRepository carnetCommandeRepository;

    public CarnetCommandeService(CarnetCommandeRepository carnetCommandeRepository) {
        this.carnetCommandeRepository = carnetCommandeRepository;
    }

    /**
     * Save a carnetCommande.
     *
     * @param carnetCommande the entity to save.
     * @return the persisted entity.
     */
    public CarnetCommande save(CarnetCommande carnetCommande) {
        log.debug("Request to save CarnetCommande : {}", carnetCommande);
        return carnetCommandeRepository.save(carnetCommande);
    }

    /**
     * Get all the carnetCommandes.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<CarnetCommande> findAll(Pageable pageable) {
        log.debug("Request to get all CarnetCommandes");
        return carnetCommandeRepository.findAll(pageable);
    }


    /**
     * Get one carnetCommande by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<CarnetCommande> findOne(Long id) {
        log.debug("Request to get CarnetCommande : {}", id);
        return carnetCommandeRepository.findById(id);
    }

    /**
     * Delete the carnetCommande by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete CarnetCommande : {}", id);
        carnetCommandeRepository.deleteById(id);
    }
}
