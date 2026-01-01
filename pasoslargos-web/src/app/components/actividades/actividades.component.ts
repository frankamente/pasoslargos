import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  month: string;
  events: string[];
}

interface ProjectArea {
  area: string;
  items: string[];
}

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent {
  mainActivities = [
    'Excursiones',
    'Senderismo',
    'Escalada',
    'Vias Ferratas',
    'Alpinismo',
    'Esquí de Travesía',
    'Descenso de Barrancos',
    'Acampadas Alpinísticas',
    'Raquetas de Nieve',
    'Marcha'
  ];

  timeline2025: TimelineEvent[] = [
    {
      month: 'Enero',
      events: [
        '19 de Enero: Ruta Senderista Solidaria (Damnificados DANA Valencia)',
        'Ruta por la Sierra de las Cumbres'
      ]
    },
    {
      month: 'Febrero',
      events: [
        '15 de Febrero: Voluntariado limpieza "Camino de la Hierbabuena"',
        'Ruta Genalguacil - Benarrabá',
        'Ruta circular Almola'
      ]
    },
    {
      month: 'Marzo',
      events: [
        'Día de Andalucía (Molletada en Sierra de las Nieves)',
        'Ruta de hermandad con "Asociación El Batolito" (Casares)'
      ]
    },
    {
      month: 'Abril',
      events: [
        '6 de Abril: V Día de las Vías Pecuarias (Cuevas del Becerro)',
        'Ruta por la Sierra de las Cabras (Antequera)',
        'Ruta Jubrique al Monte Jardón'
      ]
    },
    {
      month: 'Mayo',
      events: [
        'Subida a La Maroma (Techos de Andalucía)',
        'Ruta por los Pilares (Cuevas del Becerro)',
        'Ruta Los Alamillos - Sendero del Gaduares',
        'Ruta Presa del Guadalteba - El Coscojal'
      ]
    },
    {
      month: 'Junio',
      events: [
        '8 de Junio: V Caminata Arriera (con Asoc. Vecinos La Indiana)',
        'XXVII Fiesta Bastón Senderista (Sierra de las Nieves)'
      ]
    },
    {
      month: 'Julio',
      events: [
        'Ruta acuática en el río Genal',
        'Fiesta de la Sardina (Fuengirola)'
      ]
    },
    {
      month: 'Agosto',
      events: [
        '16 de Agosto: Ruta "Bajo las Estrellas"',
        'Ruta acuática Las Millanas de Río Grande'
      ]
    },
    {
      month: 'Septiembre',
      events: [
        '12-14 Sept: III Jornadas de Montaña, Barranquismo y Espeleología',
        'Subida al Pico Torrecilla (amanecer)'
      ]
    },
    {
      month: 'Octubre',
      events: [
        '11 de Octubre: VI Ruta Arriera Serranía Romántica',
        'Ruta Cueva del Agua, Puerto de Bellina y el Saucillo'
      ]
    },
    {
      month: 'Noviembre',
      events: [
        'Subida al Tunio desde Mirador de Benaoján',
        'Ruta por el castañar de Pujerra'
      ]
    }
  ];

  futureProjects: ProjectArea[] = [
    {
      area: 'Educación Ambiental y Divulgación',
      items: [
        'Aula de Naturaleza Itinerante',
        'Proyecto Ronda Verde',
        'Adopta un Sendero'
      ]
    },
    {
      area: 'Comunidad y Voluntariado',
      items: [
        'Rutas Inclusivas',
        'Voluntariado Ambiental Estable',
        'Encuentro de Clubes Andaluces',
        'Rutas Solidarias'
      ]
    },
    {
      area: 'Deporte y Salud',
      items: [
        'Equipo de Travesías de Resistencia',
        'Travesía en la Serranía de Ronda (Prueba propia)',
        'Entrenamiento específico (101 km, Hole)'
      ]
    },
    {
      area: 'Promoción del Patrimonio',
      items: [
        'Recuperación de Caminos Históricos',
        'Rutas Culturales (arquitectura rural, etnografía)'
      ]
    }
  ];
}
