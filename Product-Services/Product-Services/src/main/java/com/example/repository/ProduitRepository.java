package com.example.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepository extends CrudRepository {
/* l'entité à gérer
Integer :le type de la clé primaire id int ;>

les méthodes générique:
save(produit)
findById(id)
findAll()
finByNom(nom)
findByMarque(marque)
findByPrixAndMarque(prix,marque)
findByPrixOrMarque(prix,marque)
....
deleteById(id)
deleteAll()
...
*/
}