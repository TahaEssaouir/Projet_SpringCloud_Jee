import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './components/Client_component/client-list/client-list.component';
import { ClientAddComponent } from './components/Client_component/client-add/client-add.component';
import { ClientEditComponent } from './components/Client_component/client-edit/client-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProduitAddComponent } from './components/Produit_component/produit-add/produit-add.component';
import { ProduitEditComponent } from './components/Produit_component/produit-edit/produit-edit.component';
import { ProduitListComponent } from './components/Produit_component/produit-list/produit-list.component';
import { VenteAddComponent } from './components/Vente_component/vente-add/vente-add.component';
import { VenteEditComponent } from './components/Vente_component/vente-edit/vente-edit.component';
import { VenteListComponent } from './components/Vente_component/vente-list/vente-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientAddComponent,
    ClientEditComponent,
    ProduitAddComponent,
    ProduitEditComponent,
    ProduitListComponent,
    VenteAddComponent,
    VenteEditComponent,
    VenteListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
