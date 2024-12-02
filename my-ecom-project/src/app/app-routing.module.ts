import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './components/Client_component/client-list/client-list.component';
import { ClientAddComponent } from './components/Client_component/client-add/client-add.component';
import { ClientEditComponent } from './components/Client_component/client-edit/client-edit.component';
import { ProduitListComponent } from './components/Produit_component/produit-list/produit-list.component';
import { ProduitAddComponent } from './components/Produit_component/produit-add/produit-add.component';
import { VenteListComponent } from './components/Vente_component/vente-list/vente-list.component';
import { VenteAddComponent } from './components/Vente_component/vente-add/vente-add.component';
import { VenteEditComponent } from './components/Vente_component/vente-edit/vente-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  
  { path: 'clients', component: ClientListComponent },
  { path: 'add-client', component: ClientAddComponent },
  { path: 'edit-client/:id', component: ClientEditComponent },

  { path: 'produits', component: ProduitListComponent },
  { path: 'add-produit', component: ProduitAddComponent },
  { path: 'edit-produit/:id', component: ProduitAddComponent },

  { path: 'ventes', component: VenteListComponent },
  { path: 'add-vente', component: VenteAddComponent },
  { path: 'edit-vente/:id', component: VenteEditComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
