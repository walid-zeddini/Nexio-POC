package com.nexio.api.ms.domain;


import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Client.
 */
@Entity
@Table(name = "client")
public class Client implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Size(min = 6, max = 20)
    @Column(name = "login", length = 20, nullable = false)
    private String login;

    @NotNull
    @Size(min = 8, max = 20)
    @Column(name = "mot_passe", length = 20, nullable = false)
    private String motPasse;

    @NotNull
    @Size(min = 2, max = 30)
    @Column(name = "nom", length = 30, nullable = false)
    private String nom;

    @NotNull
    @Size(min = 2, max = 30)
    @Column(name = "prenom", length = 30, nullable = false)
    private String prenom;

    @NotNull
    @Size(min = 2, max = 4)
    @Column(name = "civilite", length = 4, nullable = false)
    private String civilite;

    @NotNull
    @Size(min = 10, max = 10)
    @Column(name = "date_naissance", length = 10, nullable = false)
    private String dateNaissance;

    @NotNull
    @Size(min = 1, max = 4)
    @Column(name = "numero", length = 4, nullable = false)
    private String numero;

    @NotNull
    @Size(min = 2, max = 30)
    @Column(name = "rue", length = 30, nullable = false)
    private String rue;

    @NotNull
    @Size(min = 2, max = 30)
    @Column(name = "commune", length = 30, nullable = false)
    private String commune;

    @NotNull
    @Size(min = 2, max = 30)
    @Column(name = "ville", length = 30, nullable = false)
    private String ville;

    @NotNull
    @Column(name = "code_postal", nullable = false)
    private Long codePostal;

    @NotNull
    @Size(min = 6, max = 30)
    @Column(name = "tel", length = 30, nullable = false)
    private String tel;

    @NotNull
    @Size(min = 6, max = 30)
    @Column(name = "fax", length = 30, nullable = false)
    private String fax;

    @NotNull
    @Size(min = 6, max = 30)
    @Column(name = "gsm", length = 30, nullable = false)
    private String gsm;

    @NotNull
    @Size(min = 6, max = 30)
    @Column(name = "email", length = 30, nullable = false)
    private String email;

    @OneToMany(mappedBy = "client")
    private Set<Commande> commandes = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public Client login(String login) {
        this.login = login;
        return this;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getMotPasse() {
        return motPasse;
    }

    public Client motPasse(String motPasse) {
        this.motPasse = motPasse;
        return this;
    }

    public void setMotPasse(String motPasse) {
        this.motPasse = motPasse;
    }

    public String getNom() {
        return nom;
    }

    public Client nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public Client prenom(String prenom) {
        this.prenom = prenom;
        return this;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getCivilite() {
        return civilite;
    }

    public Client civilite(String civilite) {
        this.civilite = civilite;
        return this;
    }

    public void setCivilite(String civilite) {
        this.civilite = civilite;
    }

    public String getDateNaissance() {
        return dateNaissance;
    }

    public Client dateNaissance(String dateNaissance) {
        this.dateNaissance = dateNaissance;
        return this;
    }

    public void setDateNaissance(String dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getNumero() {
        return numero;
    }

    public Client numero(String numero) {
        this.numero = numero;
        return this;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getRue() {
        return rue;
    }

    public Client rue(String rue) {
        this.rue = rue;
        return this;
    }

    public void setRue(String rue) {
        this.rue = rue;
    }

    public String getCommune() {
        return commune;
    }

    public Client commune(String commune) {
        this.commune = commune;
        return this;
    }

    public void setCommune(String commune) {
        this.commune = commune;
    }

    public String getVille() {
        return ville;
    }

    public Client ville(String ville) {
        this.ville = ville;
        return this;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public Long getCodePostal() {
        return codePostal;
    }

    public Client codePostal(Long codePostal) {
        this.codePostal = codePostal;
        return this;
    }

    public void setCodePostal(Long codePostal) {
        this.codePostal = codePostal;
    }

    public String getTel() {
        return tel;
    }

    public Client tel(String tel) {
        this.tel = tel;
        return this;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getFax() {
        return fax;
    }

    public Client fax(String fax) {
        this.fax = fax;
        return this;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public String getGsm() {
        return gsm;
    }

    public Client gsm(String gsm) {
        this.gsm = gsm;
        return this;
    }

    public void setGsm(String gsm) {
        this.gsm = gsm;
    }

    public String getEmail() {
        return email;
    }

    public Client email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Commande> getCommandes() {
        return commandes;
    }

    public Client commandes(Set<Commande> commandes) {
        this.commandes = commandes;
        return this;
    }

    public Client addCommande(Commande commande) {
        this.commandes.add(commande);
        commande.setClient(this);
        return this;
    }

    public Client removeCommande(Commande commande) {
        this.commandes.remove(commande);
        commande.setClient(null);
        return this;
    }

    public void setCommandes(Set<Commande> commandes) {
        this.commandes = commandes;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Client)) {
            return false;
        }
        return id != null && id.equals(((Client) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Client{" +
            "id=" + getId() +
            ", login='" + getLogin() + "'" +
            ", motPasse='" + getMotPasse() + "'" +
            ", nom='" + getNom() + "'" +
            ", prenom='" + getPrenom() + "'" +
            ", civilite='" + getCivilite() + "'" +
            ", dateNaissance='" + getDateNaissance() + "'" +
            ", numero='" + getNumero() + "'" +
            ", rue='" + getRue() + "'" +
            ", commune='" + getCommune() + "'" +
            ", ville='" + getVille() + "'" +
            ", codePostal=" + getCodePostal() +
            ", tel='" + getTel() + "'" +
            ", fax='" + getFax() + "'" +
            ", gsm='" + getGsm() + "'" +
            ", email='" + getEmail() + "'" +
            "}";
    }
}
