package com.nexio.poc.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

/**
 * A Produit.
 */
@Entity
@Table(name = "produit")
public class Produit implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Size(max = 40)
    @Column(name = "code", length = 40, nullable = false)
    private String code;

    @NotNull
    @Size(max = 70)
    @Column(name = "marque", length = 70, nullable = false)
    private String marque;

    @NotNull
    @Size(max = 100)
    @Column(name = "modele", length = 100, nullable = false)
    private String modele;

    @NotNull
    @Size(max = 100)
    @Column(name = "caracteristiques", length = 100, nullable = false)
    private String caracteristiques;

    @NotNull
    @Column(name = "prix_unitaire", precision = 21, scale = 2, nullable = false)
    private BigDecimal prixUnitaire;

    @NotNull
    @Column(name = "quantite", nullable = false)
    private Long quantite;

    @OneToMany(mappedBy = "produit")
    private Set<CarnetCommande> carnets = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties(value = "produits", allowSetters = true)
    private Categorie categorie;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public Produit code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMarque() {
        return marque;
    }

    public Produit marque(String marque) {
        this.marque = marque;
        return this;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getModele() {
        return modele;
    }

    public Produit modele(String modele) {
        this.modele = modele;
        return this;
    }

    public void setModele(String modele) {
        this.modele = modele;
    }

    public String getCaracteristiques() {
        return caracteristiques;
    }

    public Produit caracteristiques(String caracteristiques) {
        this.caracteristiques = caracteristiques;
        return this;
    }

    public void setCaracteristiques(String caracteristiques) {
        this.caracteristiques = caracteristiques;
    }

    public BigDecimal getPrixUnitaire() {
        return prixUnitaire;
    }

    public Produit prixUnitaire(BigDecimal prixUnitaire) {
        this.prixUnitaire = prixUnitaire;
        return this;
    }

    public void setPrixUnitaire(BigDecimal prixUnitaire) {
        this.prixUnitaire = prixUnitaire;
    }

    public Long getQuantite() {
        return quantite;
    }

    public Produit quantite(Long quantite) {
        this.quantite = quantite;
        return this;
    }

    public void setQuantite(Long quantite) {
        this.quantite = quantite;
    }

    public Set<CarnetCommande> getCarnets() {
        return carnets;
    }

    public Produit carnets(Set<CarnetCommande> carnetCommandes) {
        this.carnets = carnetCommandes;
        return this;
    }

    public Produit addCarnet(CarnetCommande carnetCommande) {
        this.carnets.add(carnetCommande);
        carnetCommande.setProduit(this);
        return this;
    }

    public Produit removeCarnet(CarnetCommande carnetCommande) {
        this.carnets.remove(carnetCommande);
        carnetCommande.setProduit(null);
        return this;
    }

    public void setCarnets(Set<CarnetCommande> carnetCommandes) {
        this.carnets = carnetCommandes;
    }

    public Categorie getCategorie() {
        return categorie;
    }

    public Produit categorie(Categorie categorie) {
        this.categorie = categorie;
        return this;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Produit)) {
            return false;
        }
        return id != null && id.equals(((Produit) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Produit{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", marque='" + getMarque() + "'" +
            ", modele='" + getModele() + "'" +
            ", caracteristiques='" + getCaracteristiques() + "'" +
            ", prixUnitaire=" + getPrixUnitaire() +
            ", quantite=" + getQuantite() +
            "}";
    }
}
