import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/Produits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl = 'http://localhost:8097/api/produits'; // Adjust to your API's base URL

  constructor(private http: HttpClient) {}

  // Fetch all produits
  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl);
  }

  // Fetch a single produit by ID
  getProduit(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.baseUrl}/${id}`);
  }

  // Create a new produit
  createProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.baseUrl, produit);
  }

  // Update an existing produit
  updateProduit(id: number, produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.baseUrl}/${id}`, produit);
  }

  // Delete a produit
  deleteProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
