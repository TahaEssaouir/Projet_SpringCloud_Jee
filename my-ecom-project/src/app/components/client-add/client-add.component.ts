import { Component } from '@angular/core';
import { Client } from '../../models/Clients';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrl: './client-add.component.css'
})
export class ClientAddComponent {
  client: Client = new Client();

  constructor(private clientService: ClientService, private router: Router) {}

  addClient(): void {
    this.clientService.createClient(this.client).subscribe(() => {
      this.router.navigate(['/clients']);
    });
  }
}
