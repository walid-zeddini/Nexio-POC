package com.nexio.poc.web.rest;

import com.nexio.poc.NexioApp;
import com.nexio.poc.domain.CarnetCommande;
import com.nexio.poc.repository.CarnetCommandeRepository;
import com.nexio.poc.service.CarnetCommandeService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.math.BigDecimal;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link CarnetCommandeResource} REST controller.
 */
@SpringBootTest(classes = NexioApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class CarnetCommandeResourceIT {

    private static final Long DEFAULT_QTE = 1L;
    private static final Long UPDATED_QTE = 2L;

    private static final BigDecimal DEFAULT_PRIX_UNITAIRE = new BigDecimal(1);
    private static final BigDecimal UPDATED_PRIX_UNITAIRE = new BigDecimal(2);

    private static final BigDecimal DEFAULT_PRIX_TOTAL = new BigDecimal(1);
    private static final BigDecimal UPDATED_PRIX_TOTAL = new BigDecimal(2);

    private static final Long DEFAULT_ETAT = 1L;
    private static final Long UPDATED_ETAT = 2L;

    @Autowired
    private CarnetCommandeRepository carnetCommandeRepository;

    @Autowired
    private CarnetCommandeService carnetCommandeService;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restCarnetCommandeMockMvc;

    private CarnetCommande carnetCommande;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static CarnetCommande createEntity(EntityManager em) {
        CarnetCommande carnetCommande = new CarnetCommande()
            .qte(DEFAULT_QTE)
            .prixUnitaire(DEFAULT_PRIX_UNITAIRE)
            .prixTotal(DEFAULT_PRIX_TOTAL)
            .etat(DEFAULT_ETAT);
        return carnetCommande;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static CarnetCommande createUpdatedEntity(EntityManager em) {
        CarnetCommande carnetCommande = new CarnetCommande()
            .qte(UPDATED_QTE)
            .prixUnitaire(UPDATED_PRIX_UNITAIRE)
            .prixTotal(UPDATED_PRIX_TOTAL)
            .etat(UPDATED_ETAT);
        return carnetCommande;
    }

    @BeforeEach
    public void initTest() {
        carnetCommande = createEntity(em);
    }

    @Test
    @Transactional
    public void createCarnetCommande() throws Exception {
        int databaseSizeBeforeCreate = carnetCommandeRepository.findAll().size();
        // Create the CarnetCommande
        restCarnetCommandeMockMvc.perform(post("/api/carnet-commandes")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(carnetCommande)))
            .andExpect(status().isCreated());

        // Validate the CarnetCommande in the database
        List<CarnetCommande> carnetCommandeList = carnetCommandeRepository.findAll();
        assertThat(carnetCommandeList).hasSize(databaseSizeBeforeCreate + 1);
        CarnetCommande testCarnetCommande = carnetCommandeList.get(carnetCommandeList.size() - 1);
        assertThat(testCarnetCommande.getQte()).isEqualTo(DEFAULT_QTE);
        assertThat(testCarnetCommande.getPrixUnitaire()).isEqualTo(DEFAULT_PRIX_UNITAIRE);
        assertThat(testCarnetCommande.getPrixTotal()).isEqualTo(DEFAULT_PRIX_TOTAL);
        assertThat(testCarnetCommande.getEtat()).isEqualTo(DEFAULT_ETAT);
    }

    @Test
    @Transactional
    public void createCarnetCommandeWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = carnetCommandeRepository.findAll().size();

        // Create the CarnetCommande with an existing ID
        carnetCommande.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restCarnetCommandeMockMvc.perform(post("/api/carnet-commandes")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(carnetCommande)))
            .andExpect(status().isBadRequest());

        // Validate the CarnetCommande in the database
        List<CarnetCommande> carnetCommandeList = carnetCommandeRepository.findAll();
        assertThat(carnetCommandeList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void checkQteIsRequired() throws Exception {
        int databaseSizeBeforeTest = carnetCommandeRepository.findAll().size();
        // set the field null
        carnetCommande.setQte(null);

        // Create the CarnetCommande, which fails.


        restCarnetCommandeMockMvc.perform(post("/api/carnet-commandes")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(carnetCommande)))
            .andExpect(status().isBadRequest());

        List<CarnetCommande> carnetCommandeList = carnetCommandeRepository.findAll();
        assertThat(carnetCommandeList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkPrixUnitaireIsRequired() throws Exception {
        int databaseSizeBeforeTest = carnetCommandeRepository.findAll().size();
        // set the field null
        carnetCommande.setPrixUnitaire(null);

        // Create the CarnetCommande, which fails.


        restCarnetCommandeMockMvc.perform(post("/api/carnet-commandes")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(carnetCommande)))
            .andExpect(status().isBadRequest());

        List<CarnetCommande> carnetCommandeList = carnetCommandeRepository.findAll();
        assertThat(carnetCommandeList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkPrixTotalIsRequired() throws Exception {
        int databaseSizeBeforeTest = carnetCommandeRepository.findAll().size();
        // set the field null
        carnetCommande.setPrixTotal(null);

        // Create the CarnetCommande, which fails.


        restCarnetCommandeMockMvc.perform(post("/api/carnet-commandes")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(carnetCommande)))
            .andExpect(status().isBadRequest());

        List<CarnetCommande> carnetCommandeList = carnetCommandeRepository.findAll();
        assertThat(carnetCommandeList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkEtatIsRequired() throws Exception {
        int databaseSizeBeforeTest = carnetCommandeRepository.findAll().size();
        // set the field null
        carnetCommande.setEtat(null);

        // Create the CarnetCommande, which fails.


        restCarnetCommandeMockMvc.perform(post("/api/carnet-commandes")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(carnetCommande)))
            .andExpect(status().isBadRequest());

        List<CarnetCommande> carnetCommandeList = carnetCommandeRepository.findAll();
        assertThat(carnetCommandeList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllCarnetCommandes() throws Exception {
        // Initialize the database
        carnetCommandeRepository.saveAndFlush(carnetCommande);

        // Get all the carnetCommandeList
        restCarnetCommandeMockMvc.perform(get("/api/carnet-commandes?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(carnetCommande.getId().intValue())))
            .andExpect(jsonPath("$.[*].qte").value(hasItem(DEFAULT_QTE.intValue())))
            .andExpect(jsonPath("$.[*].prixUnitaire").value(hasItem(DEFAULT_PRIX_UNITAIRE.intValue())))
            .andExpect(jsonPath("$.[*].prixTotal").value(hasItem(DEFAULT_PRIX_TOTAL.intValue())))
            .andExpect(jsonPath("$.[*].etat").value(hasItem(DEFAULT_ETAT.intValue())));
    }
    
    @Test
    @Transactional
    public void getCarnetCommande() throws Exception {
        // Initialize the database
        carnetCommandeRepository.saveAndFlush(carnetCommande);

        // Get the carnetCommande
        restCarnetCommandeMockMvc.perform(get("/api/carnet-commandes/{id}", carnetCommande.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(carnetCommande.getId().intValue()))
            .andExpect(jsonPath("$.qte").value(DEFAULT_QTE.intValue()))
            .andExpect(jsonPath("$.prixUnitaire").value(DEFAULT_PRIX_UNITAIRE.intValue()))
            .andExpect(jsonPath("$.prixTotal").value(DEFAULT_PRIX_TOTAL.intValue()))
            .andExpect(jsonPath("$.etat").value(DEFAULT_ETAT.intValue()));
    }
    @Test
    @Transactional
    public void getNonExistingCarnetCommande() throws Exception {
        // Get the carnetCommande
        restCarnetCommandeMockMvc.perform(get("/api/carnet-commandes/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateCarnetCommande() throws Exception {
        // Initialize the database
        carnetCommandeService.save(carnetCommande);

        int databaseSizeBeforeUpdate = carnetCommandeRepository.findAll().size();

        // Update the carnetCommande
        CarnetCommande updatedCarnetCommande = carnetCommandeRepository.findById(carnetCommande.getId()).get();
        // Disconnect from session so that the updates on updatedCarnetCommande are not directly saved in db
        em.detach(updatedCarnetCommande);
        updatedCarnetCommande
            .qte(UPDATED_QTE)
            .prixUnitaire(UPDATED_PRIX_UNITAIRE)
            .prixTotal(UPDATED_PRIX_TOTAL)
            .etat(UPDATED_ETAT);

        restCarnetCommandeMockMvc.perform(put("/api/carnet-commandes")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedCarnetCommande)))
            .andExpect(status().isOk());

        // Validate the CarnetCommande in the database
        List<CarnetCommande> carnetCommandeList = carnetCommandeRepository.findAll();
        assertThat(carnetCommandeList).hasSize(databaseSizeBeforeUpdate);
        CarnetCommande testCarnetCommande = carnetCommandeList.get(carnetCommandeList.size() - 1);
        assertThat(testCarnetCommande.getQte()).isEqualTo(UPDATED_QTE);
        assertThat(testCarnetCommande.getPrixUnitaire()).isEqualTo(UPDATED_PRIX_UNITAIRE);
        assertThat(testCarnetCommande.getPrixTotal()).isEqualTo(UPDATED_PRIX_TOTAL);
        assertThat(testCarnetCommande.getEtat()).isEqualTo(UPDATED_ETAT);
    }

    @Test
    @Transactional
    public void updateNonExistingCarnetCommande() throws Exception {
        int databaseSizeBeforeUpdate = carnetCommandeRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCarnetCommandeMockMvc.perform(put("/api/carnet-commandes")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(carnetCommande)))
            .andExpect(status().isBadRequest());

        // Validate the CarnetCommande in the database
        List<CarnetCommande> carnetCommandeList = carnetCommandeRepository.findAll();
        assertThat(carnetCommandeList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteCarnetCommande() throws Exception {
        // Initialize the database
        carnetCommandeService.save(carnetCommande);

        int databaseSizeBeforeDelete = carnetCommandeRepository.findAll().size();

        // Delete the carnetCommande
        restCarnetCommandeMockMvc.perform(delete("/api/carnet-commandes/{id}", carnetCommande.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<CarnetCommande> carnetCommandeList = carnetCommandeRepository.findAll();
        assertThat(carnetCommandeList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
