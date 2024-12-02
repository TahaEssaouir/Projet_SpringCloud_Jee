import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../../../models/Produits';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit {
  produit: Produit = new Produit();

  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.produitService.getProduit(id).subscribe((data: Produit) => {
      this.produit = data;
    });
  }

  updateProduit(): void {
    const id = this.produit.id;
    this.produitService.updateProduit(id, this.produit).subscribe(() => {
      this.router.navigate(['/produits']);
    });
  }
}
