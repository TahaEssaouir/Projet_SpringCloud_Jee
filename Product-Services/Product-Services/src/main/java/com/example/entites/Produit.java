package com.example.entites;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
/*Table:personnalier le nom de la table sinon la table sera crée avec le meme nom que la classe*/
@Table(name="produits")
public class Produit {
//Id:primary key de la table produits
@Id
//Column:si vous voullez personnaliser le nom d'une colonne
@Column(name="id")
//la Valeur de la colonne id est auto_increment
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
//libelle sera le nom de la colonne qui correspond le nom dans la classe produit
@Column(name="libelle")
private String nom;
//une colonne marque sera crée dans la table produits
private String marque;
//la colonne prix
private float prix;
//la colonne qteStock
private int qteStock;
//les constructeurs ,setter ,getter Sont obligatoires

public Produit() {}
public Produit(int id, String nom, String marque, float prix, int qteStock) {
super();
this.id = id;
this.nom = nom;
this.marque = marque;
this.prix = prix;
this.qteStock = qteStock;
}
public int getId() {
return id;
}
public void setId(int id) {
this.id = id;
}
public String getNom() {
return nom;
}
public void setNom(String nom) {
this.nom = nom;
}
public String getMarque() {
return marque;
}
public void setMarque(String marque) {
this.marque = marque;
}
public float getPrix() {
return prix;
}
public void setPrix(float prix) {
this.prix = prix;
}
public int getQteStock() {
return qteStock;
}
public void setQteStock(int qteStock) {
this.qteStock = qteStock;
}
}
