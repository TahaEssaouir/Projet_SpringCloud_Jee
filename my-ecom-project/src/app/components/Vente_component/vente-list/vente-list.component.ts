import { Component, OnInit } from '@angular/core';
import { Vente } from '../../../models/Ventes';
import { VenteService } from '../../../services/vente.service';

@Component({
  selector: 'app-vente-list',
  templateUrl: './vente-list.component.html',
  styleUrls: ['./vente-list.component.css']
})
export class VenteListComponent implements OnInit {
  ventes: Vente[] = [];

  constructor(private venteService: VenteService) {}

  ngOnInit(): void {
    this.loadVentes();
  }

  loadVentes(): void {
    this.venteService.getVentes().subscribe((data: Vente[]) => {
      this.ventes = data;
    });
  }

  deleteVente(id: number): void {
    this.venteService.deleteVente(id).subscribe(() => {
      this.ventes = this.ventes.filter(vente => vente.id !== id);
    });
  }
}
