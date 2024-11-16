package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entites.Produit;
import com.example.repository.ProduitRepository;

/*Création du controller de type RestController*/
@RestController
/*la route principale pour consommer l'api du controlleur*/
@RequestMapping("api/produits/")  
public class PrduitController {
/*le repository de l'entité produit pour gérer les transaction dans la base de données*/
     @Autowired
       private ProduitRepository produitRepository;
   
     
     /*@RequestBody :permet de récupéer un objet json puis le convertir à un objet de type produit
     {
       "id":"5",
       "nom":"TV",
       "marque":"Sumsung",
       "prix":1000,
       "qteStock":5
       }
   */
     @PostMapping("/add")
   public ResponseEntity ajouter(@RequestBody Produit produit) {
   try {
    /*Sauvegarder le produit dans la table produits*/
    produitRepository.save(produit);
    /*status:201*/
    return new ResponseEntity<>(produit, HttpStatus.CREATED);
    } catch (Exception e) {
    /*Erreur 500*/
    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
   }
}