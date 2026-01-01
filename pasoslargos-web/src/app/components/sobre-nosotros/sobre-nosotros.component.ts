import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css'
})
export class SobreNosotrosComponent {
  historia = `La Asociación Senderista Pasos Largos es una organización dedicada a la promoción del senderismo y el disfrute de la naturaleza. Recientemente, hemos iniciado una nueva etapa con una nueva junta directiva, llena de proyectos y retos emocionantes.
  
  Nos caracterizamos por nuestro compromiso social, como lo demuestra nuestra reciente "Ruta Solidaria" del 19 de enero de 2024, donde logramos recaudar 1.375,10 euros para los damnificados por la DANA en la Comunidad Valenciana, donados íntegramente a Cruz Roja.`;

  tarifas = [
    { category: 'A (Mayores)', price: '70,00€', coverage: 'Andalucía, Ceuta y Melilla', activities: 'Senderismo, escalada, montañismo, etc.' },
    { category: 'A+ (Mayores)', price: '83,00€', coverage: 'Andalucía, Ceuta y Melilla', activities: 'Igual que A + BTT, espeleología, esquí alpino, etc.' },
    { category: 'A Familiar (Mayores)', price: '68,00€', coverage: 'Andalucía, Ceuta y Melilla', activities: 'Igual que A' },
    { category: 'A-IS (Inclusión Social)', price: '44,00€', coverage: 'Andalucía, Ceuta y Melilla', activities: 'Igual que A' },
    { category: 'A+IS (Inclusión Social)', price: '58,00€', coverage: 'Andalucía, Ceuta y Melilla', activities: 'Igual que A+' },
    { category: 'A-ESP (Parados/Estudiantes)', price: '53,00€', coverage: 'Andalucía, Ceuta y Melilla', activities: 'Igual que A' },
    { category: 'A-65 (Mayores 65 años)', price: '57,00€', coverage: 'Andalucía, Ceuta y Melilla', activities: 'Igual que A' },
    { category: 'A NAC (Mayores)', price: '77,00€', coverage: 'España, Andorra, Pirineo Francés, Portugal y Marruecos', activities: 'Autonómica + actividades regionales' },
    { category: 'A NAC + (Mayores)', price: '94,00€', coverage: 'España, Andorra, Pirineo Francés, Portugal y Marruecos', activities: 'Igual que A NAC + BTT, espeleología, etc.' },
    { category: 'B (Mayores)', price: '91,00€', coverage: 'España, Andorra, Pirineo Francés, Portugal y Marruecos', activities: 'Cobertura amplia' },
    { category: 'B-65 (Mayores 65 años)', price: '81,00€', coverage: 'España, Andorra, Pirineo Francés, Portugal y Marruecos', activities: 'Igual que B' },
    { category: 'B+ (Mayores)', price: '108,00€', coverage: 'España, Andorra, Pirineo Francés, Portugal y Marruecos', activities: 'Igual que B + BTT, espeleología, etc.' },
    { category: 'B-Familiar (Mayores)', price: '85,00€', coverage: 'España, Andorra, Pirineo Francés, Portugal y Marruecos', activities: 'Igual que B' },
    { category: 'B-IS (Inclusión Social)', price: '73,00€', coverage: 'España, Andorra, Pirineo Francés, Portugal y Marruecos', activities: 'Igual que B' },
    { category: 'B+IS (Inclusión Social)', price: '95,00€', coverage: 'España, Andorra, Pirineo Francés, Portugal y Marruecos', activities: 'Igual que B+' },
    { category: 'C (Mayores)', price: '152,00€', coverage: 'Europa y Marruecos', activities: 'Incluye BTT, espeleología, esquí, etc.' },
    { category: 'C-IS (Inclusión Social)', price: '114,00€', coverage: 'Europa y Marruecos', activities: 'Igual que C' },
    { category: 'D (Mayores)', price: '240,00€', coverage: 'Mundial hasta 7.000m', activities: 'Incluye BTT, espeleología, esquí, etc.' },
    { category: 'D2 (Mayores)', price: '945,00€', coverage: 'Mundial más de 7.000m', activities: 'Incluye BTT, espeleología, esquí, etc.' }
  ];

  otherFees = [
    { description: 'Cuota para federados en otro club', price: '25€' }
  ];
}
