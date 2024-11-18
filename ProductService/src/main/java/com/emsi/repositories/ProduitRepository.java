package com.emsi.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.emsi.models.Produit;



//Repository:création d'un repository le jpa va cherher les interfaces qui ont
//cette annoation afin de générer les méthodes de transaction à la base de données
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