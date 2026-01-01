import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Activity {
  title: string;
  description: string;
  details?: string[];
}

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent {
  activities: Activity[] = [
    {
      title: 'RUTA SOLIDARÍA CON LOS DAMNIFICADOS POR LA DANA',
      description: 'Evento solidario realizado el 19 de enero de 2024 con más de 100 participantes. Se recaudaron 1.375,10 euros para Cruz Roja destinados a los afectados por la DANA.'
    }
  ];
}
