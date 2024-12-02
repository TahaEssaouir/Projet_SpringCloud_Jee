import { Component, OnInit } from '@angular/core';
import { Vente } from '../../../models/Ventes';
import { VenteService } from '../../../services/vente.service';
import { ClientService } from '../../../services/client.service';
import { ProduitService } from '../../../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../../models/Clients';
import { Produit } from '../../../models/Produits';

@Component({
  selector: 'app-vente-edit',
  templateUrl: './vente-edit.component.html',
  styleUrls: ['./vente-edit.component.css']
})
export class VenteEditComponent implements OnInit {
  vente: Vente = new Vente();
  clients: Client[] = [];
  produits: Produit[] = [];

  constructor(
    private venteService: VenteService,
    private clientService: ClientService,
    private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClients();
    this.loadProduits();
    const id = this.route.snapshot.params['id'];
    this.venteService.getVente(id).subscribe((data: Vente) => {
      this.vente = data;
    });
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

  updateVente(): void {
    this.venteService.updateVente(this.vente.id, this.vente).subscribe(() => {
      this.router.navigate(['/ventes']);
    });
  }
}
