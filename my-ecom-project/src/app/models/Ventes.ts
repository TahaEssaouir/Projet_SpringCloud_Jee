import { Client } from './Clients';
import { Produit } from './Produits';

export class Vente {
  id!: number;
  client!: Client;
  produit!: Produit;
  date!: Date;
  quantite!: number;
}
