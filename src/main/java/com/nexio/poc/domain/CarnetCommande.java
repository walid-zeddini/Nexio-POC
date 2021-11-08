package com.nexio.poc.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 * A CarnetCommande.
 */
@Entity
@Table(name = "carnet_commande")
public class CarnetCommande implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "qte", nullable = false)
    private Long qte;

    @NotNull
    @Column(name = "prix_unitaire", precision = 21, scale = 2, nullable = false)
    private BigDecimal prixUnitaire;

    @NotNull
    @Column(name = "prix_total", precision = 21, scale = 2, nullable = false)
    private BigDecimal prixTotal;

    @NotNull
    @Column(name = "etat", nullable = false)
    private Long etat;

    @ManyToOne
    @JsonIgnoreProperties(value = "carnets", allowSetters = true)
    private Produit produit;

    @ManyToOne
    @JsonIgnoreProperties(value = "carnets", allowSetters = true)
    private Commande commande;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getQte() {
        return qte;
    }

    public CarnetCommande qte(Long qte) {
        this.qte = qte;
        return this;
    }

    public void setQte(Long qte) {
        this.qte = qte;
    }

    public BigDecimal getPrixUnitaire() {
        return prixUnitaire;
    }

    public CarnetCommande prixUnitaire(BigDecimal prixUnitaire) {
        this.prixUnitaire = prixUnitaire;
        return this;
    }

    public void setPrixUnitaire(BigDecimal prixUnitaire) {
        this.prixUnitaire = prixUnitaire;
    }

    public BigDecimal getPrixTotal() {
        return prixTotal;
    }

    public CarnetCommande prixTotal(BigDecimal prixTotal) {
        this.prixTotal = prixTotal;
        return this;
    }

    public void setPrixTotal(BigDecimal prixTotal) {
        this.prixTotal = prixTotal;
    }

    public Long getEtat() {
        return etat;
    }

    public CarnetCommande etat(Long etat) {
        this.etat = etat;
        return this;
    }

    public void setEtat(Long etat) {
        this.etat = etat;
    }

    public Produit getProduit() {
        return produit;
    }

    public CarnetCommande produit(Produit produit) {
        this.produit = produit;
        return this;
    }

    public void setProduit(Produit produit) {
        this.produit = produit;
    }

    public Commande getCommande() {
        return commande;
    }

    public CarnetCommande commande(Commande commande) {
        this.commande = commande;
        return this;
    }

    public void setCommande(Commande commande) {
        this.commande = commande;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CarnetCommande)) {
            return false;
        }
        return id != null && id.equals(((CarnetCommande) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CarnetCommande{" +
            "id=" + getId() +
            ", qte=" + getQte() +
            ", prixUnitaire=" + getPrixUnitaire() +
            ", prixTotal=" + getPrixTotal() +
            ", etat=" + getEtat() +
            "}";
    }
}
