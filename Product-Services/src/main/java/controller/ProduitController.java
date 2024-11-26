package controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
<<<<<<< HEAD
import org.springframework.http.HttpStatus;

=======
>>>>>>> cb629fe709bd611785e090cf8cd0b1f5a17b1d59

import entities.Produit;
import repositories.ProduitRepository;

@RestController
@RequestMapping("api/produits/")
public class ProduitController {

    @Autowired
    private ProduitRepository produitRepository;

    @PostMapping("/add")
    public ResponseEntity<Produit> ajouter(@RequestBody Produit produit) {
        try {
            produitRepository.save(produit);
            return new ResponseEntity<>(produit, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produit> detail(@PathVariable("id") int id) {
        Optional<Produit> pp = produitRepository.findById(id);
        return pp.map(produit -> new ResponseEntity<>(produit, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimer(@PathVariable("id") int id) {
        try {
            produitRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @DeleteMapping("/vider")
    public ResponseEntity<Void> vider() {
        try {
            produitRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produit> modifier(@PathVariable("id") int id, @RequestBody Produit produit) {
        if (produitRepository.save(produit) != null) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
