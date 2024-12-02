import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vente } from '../models/Ventes'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class VenteService {
  private baseUrl = 'http://localhost:8097/api/ventes'; // Adjust to your API's base URL

  constructor(private http: HttpClient) {}

  // Fetch all ventes
  getVentes(): Observable<Vente[]> {
    return this.http.get<Vente[]>(this.baseUrl);
  }

  // Fetch a single vente by ID
  getVente(id: number): Observable<Vente> {
    return this.http.get<Vente>(`${this.baseUrl}/${id}`);
  }

  // Create a new vente
  createVente(vente: Vente): Observable<Vente> {
    return this.http.post<Vente>(this.baseUrl, vente);
  }

  // Update an existing vente
  updateVente(id: number, vente: Vente): Observable<Vente> {
    return this.http.put<Vente>(`${this.baseUrl}/${id}`, vente);
  }

  // Delete a vente
  deleteVente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
