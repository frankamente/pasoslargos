import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactInfo = {
    address: 'Apdo. correos 311, 29400 - Ronda, Serranía de Ronda (Málaga)',
    email: 'rutaspasoslargos@gmail.com',
    websites: ['www.pasoslargos.com', 'www.espeleoclubpasoslargos.com']
  };
}
