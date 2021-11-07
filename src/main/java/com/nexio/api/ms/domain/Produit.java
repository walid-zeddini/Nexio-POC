package com.nexio.api.ms.domain;

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
    @Column(name = "designation", length = 40, nullable = false)
    private String designation;

    @NotNull
    @Size(max = 30)
    @Column(name = "marque", length = 30, nullable = false)
    private String marque;

    @NotNull
    @Size(max = 20)
    @Column(name = "modele", length = 20, nullable = false)
    private String modele;

    @NotNull
    @Size(max = 50)
    @Column(name = "configuration", length = 50, nullable = false)
    private String configuration;

    @NotNull
    @Column(name = "prix_unitaire", precision = 21, scale = 2, nullable = false)
    private BigDecimal prixUnitaire;

    @NotNull
    @Column(name = "quantite", nullable = false)
    private Long quantite;

    @OneToMany(mappedBy = "produit")
    private Set<Commande> commandes = new HashSet<>();

    @OneToMany(mappedBy = "produit")
    private Set<Categorie> categories = new HashSet<>();

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

    public String getDesignation() {
        return designation;
    }

    public Produit designation(String designation) {
        this.designation = designation;
        return this;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
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

    public String getConfiguration() {
        return configuration;
    }

    public Produit configuration(String configuration) {
        this.configuration = configuration;
        return this;
    }

    public void setConfiguration(String configuration) {
        this.configuration = configuration;
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

    public Set<Commande> getCommandes() {
        return commandes;
    }

    public Produit commandes(Set<Commande> commandes) {
        this.commandes = commandes;
        return this;
    }

    public Produit addCommande(Commande commande) {
        this.commandes.add(commande);
        commande.setProduit(this);
        return this;
    }

    public Produit removeCommande(Commande commande) {
        this.commandes.remove(commande);
        commande.setProduit(null);
        return this;
    }

    public void setCommandes(Set<Commande> commandes) {
        this.commandes = commandes;
    }

    public Set<Categorie> getCategories() {
        return categories;
    }

    public Produit categories(Set<Categorie> categories) {
        this.categories = categories;
        return this;
    }

    public Produit addCategorie(Categorie categorie) {
        this.categories.add(categorie);
        categorie.setProduit(this);
        return this;
    }

    public Produit removeCategorie(Categorie categorie) {
        this.categories.remove(categorie);
        categorie.setProduit(null);
        return this;
    }

    public void setCategories(Set<Categorie> categories) {
        this.categories = categories;
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
            ", designation='" + getDesignation() + "'" +
            ", marque='" + getMarque() + "'" +
            ", modele='" + getModele() + "'" +
            ", configuration='" + getConfiguration() + "'" +
            ", prixUnitaire=" + getPrixUnitaire() +
            ", quantite=" + getQuantite() +
            "}";
    }
}
