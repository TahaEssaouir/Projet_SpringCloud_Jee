import { Component, OnInit } from '@angular/core';
import { Vente } from '../../../models/Ventes';
import { VenteService } from '../../../services/vente.service';
import { ClientService } from '../../../services/client.service';
import { ProduitService } from '../../../services/produit.service';
import { Router } from '@angular/router';
import { Client } from '../../../models/Clients';
import { Produit } from '../../../models/Produits';

@Component({
  selector: 'app-vente-add',
  templateUrl: './vente-add.component.html',
  styleUrls: ['./vente-add.component.css']
})
export class VenteAddComponent implements OnInit {
  vente: Vente = new Vente();
  clients: Client[] = [];
  produits: Produit[] = [];

  constructor(
    private venteService: VenteService,
    private clientService: ClientService,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClients();
    this.loadProduits();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe((data: Client[]) => {
      this.clients = data;
    });
  }

  loadProduits(): void {
    this.produitService.getProduits().subscribe((data: Produit[]) => {
      this.produits = data;
    });
  }

  addVente(): void {
    this.venteService.createVente(this.vente).subscribe(() => {
      this.router.navigate(['/ventes']);
    });
  }
}
