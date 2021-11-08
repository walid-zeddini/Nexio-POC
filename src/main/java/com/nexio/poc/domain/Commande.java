package com.nexio.poc.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

/**
 * A Commande.
 */
@Entity
@Table(name = "commande")
public class Commande implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Size(min = 2, max = 30)
    @Column(name = "numero", length = 30, nullable = false)
    private String numero;

    @NotNull
    @Column(name = "date", nullable = false)
    private LocalDate date;

    @NotNull
    @Column(name = "prix_total", precision = 21, scale = 2, nullable = false)
    private BigDecimal prixTotal;

    @NotNull
    @Column(name = "etat", nullable = false)
    private Long etat;

    @OneToMany(mappedBy = "commande")
    private Set<CarnetCommande> carnets = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties(value = "commandes", allowSetters = true)
    private Client client;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumero() {
        return numero;
    }

    public Commande numero(String numero) {
        this.numero = numero;
        return this;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public LocalDate getDate() {
        return date;
    }

    public Commande date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public BigDecimal getPrixTotal() {
        return prixTotal;
    }

    public Commande prixTotal(BigDecimal prixTotal) {
        this.prixTotal = prixTotal;
        return this;
    }

    public void setPrixTotal(BigDecimal prixTotal) {
        this.prixTotal = prixTotal;
    }

    public Long getEtat() {
        return etat;
    }

    public Commande etat(Long etat) {
        this.etat = etat;
        return this;
    }

    public void setEtat(Long etat) {
        this.etat = etat;
    }

    public Set<CarnetCommande> getCarnets() {
        return carnets;
    }

    public Commande carnets(Set<CarnetCommande> carnetCommandes) {
        this.carnets = carnetCommandes;
        return this;
    }

    public Commande addCarnet(CarnetCommande carnetCommande) {
        this.carnets.add(carnetCommande);
        carnetCommande.setCommande(this);
        return this;
    }

    public Commande removeCarnet(CarnetCommande carnetCommande) {
        this.carnets.remove(carnetCommande);
        carnetCommande.setCommande(null);
        return this;
    }

    public void setCarnets(Set<CarnetCommande> carnetCommandes) {
        this.carnets = carnetCommandes;
    }

    public Client getClient() {
        return client;
    }

    public Commande client(Client client) {
        this.client = client;
        return this;
    }

    public void setClient(Client client) {
        this.client = client;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Commande)) {
            return false;
        }
        return id != null && id.equals(((Commande) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Commande{" +
            "id=" + getId() +
            ", numero='" + getNumero() + "'" +
            ", date='" + getDate() + "'" +
            ", prixTotal=" + getPrixTotal() +
            ", etat=" + getEtat() +
            "}";
    }
}
