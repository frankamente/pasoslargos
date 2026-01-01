import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  motto = 'Donde la naturaleza esculpe el alma';
  intro = 'Desde 1996 explorando, sintiendo y protegiendo la Serranía de Ronda.';
}
