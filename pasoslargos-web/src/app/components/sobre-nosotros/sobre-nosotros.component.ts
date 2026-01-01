import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css'
})
export class SobreNosotrosComponent implements OnInit {
  identity = {
    name: 'Asociación Senderista Pasos Largos',
    specialization: 'Espeleoclub Pasos Largos',
    location: 'Ronda, Serranía de Ronda (Málaga/Andalucía)',
    motto: 'Donde la naturaleza esculpe el alma'
  };

  history = [
    'En Pasos Largos nacemos del amor por los caminos que se adentran en la montaña y por las sendas que revelan la vida secreta del paisaje. Encontramos en el paso lento una forma de descubrir, comprender y cuidar la naturaleza que nos rodea. En cada recorrido buscamos algo más que llegar: buscamos sentir, aprender y volver distintos. Entendemos el senderismo como una manera de estar en el mundo: con curiosidad, humildad y gratitud. Nos une el deseo profundo de contemplar, comprender y proteger la naturaleza, especialmente la riqueza paisajística y vital de la Serranía de Ronda, el lugar que nos inspira y nos da identidad.',
    'Caminar nos enseña a mirar con otros ojos. Nacemos del anhelo de conocer y compartir la belleza natural que nos rodea, de escuchar el lenguaje de las montañas, los ríos y los bosques, y de aprender a protegerlos. Creemos en el poder de la admiración: esa emoción que nace al mirar un horizonte y recordar que formamos parte de algo mucho más grande.',
    'Nuestra esencia es el respeto por el entorno y la convicción de que cada paso puede ser un acto de cuidado. Queremos difundir el valor del paisaje y de la vida que lo habita, impulsar la educación ambiental y practicar un senderismo que deje huella solo en la memoria.'
  ];

  nuestraHistoria = [
    'La Asociación Senderista Pasos Largos nació en 1996 y, desde entonces, forma parte activa de la vida rondeña y de la Serranía, tanto en el ámbito social como en el deportivo. Lleva el nombre Pasos Largos en homenaje a Juan José Mingolla Gallardo, un hombre que encontró en la naturaleza su verdadero hogar. Habitante de la Serranía de Ronda, conocía sus montes, cañadas y barrancos como pocos: cada senda, cada recodo del río y cada rumor del viento le eran familiares. En aquellos paisajes de encinas y peñascos halló refugio, silencio y compañía; fue allí donde su vida se fundió con la montaña.',
    'El nombre Pasos Largos evoca ese vínculo profundo con la tierra, con el caminar libre y el ritmo pausado del que sabe orientarse siguiendo la luz, el olor del tomillo o la forma de las nubes.'
  ];

  historyQuote = 'El arte de andar con el alma abierta y los sentidos atentos a la voz del monte';

  historyRightCol = [
    'Representa el espíritu de quien avanza sin perder el respeto por lo que pisa, de quien se deja guiar por los caminos antiguos y siente que en cada paso late algo vivo.',
    'Siguiendo ese espíritu, la Asociación tiene entre sus fines conocer, estudiar y divulgar los valores paisajísticos, geológicos y botánicos —principalmente de la Serranía de Ronda—, así como organizar y realizar itinerarios y rutas, preferentemente en la Comunidad Autónoma Andaluza. Llamarnos así es recordar que el sendero no es solo distancia, sino descubrimiento; que caminar es una forma de escuchar la naturaleza y reconocernos en ella. Pasos Largos simboliza, en definitiva, la unión entre el ser humano y el paisaje: el arte de andar con el alma abierta y los sentidos atentos a la voz del monte.'
  ];

  queHacemos = [
    'En Pasos Largos mantenemos viva la vocación de acercar la naturaleza, el deporte y la convivencia a quienes comparten con nosotros el amor por la montaña.',
    'A lo largo del año organizamos numerosas actividades que combinan aventura, conocimiento y respeto por el entorno: rutas de senderismo y montañismo, descensos de barrancos, vías ferratas y salidas de espeleología, disciplina en la que nuestro equipo desarrolla una importante labor de estudio y exploración de simas y cavidades.',
    'La Serranía de Ronda es nuestro territorio natural y el corazón de la mayoría de nuestras rutas, aunque también recorremos otros parajes de la geografía andaluza e incluso más allá de sus límites. En cada temporada, nuestras actividades se abren tanto a socios como a todas aquellas personas que deseen descubrir el paisaje desde la mirada tranquila del caminante.',
    'También colaboramos con otras asociaciones, clubes y entidades para alcanzar objetivos comunes: la defensa de los caminos públicos, la protección del medio ambiente y la limpieza y mantenimiento de los sistemas subterráneos de la Serranía. Estas alianzas nos permiten compartir experiencias, intercambiar conocimiento y estrechar lazos entre los pueblos de nuestra tierra, organizando actividades conjuntas que unen deporte, cultura y respeto por el patrimonio.'
  ];

  queHacemosFooter = 'Actualmente, la Asociación cuenta con 127 federados en la Federación Andaluza de Deportes de Montaña, Escalada y Senderismo y 16 federados en la Federación de Espeleología, una muestra del compromiso y la pasión que definen a este colectivo. Semana tras semana, nuestros senderistas recorren los caminos, veredas y montes de la Serranía, fortaleciendo ese vínculo con la naturaleza que nos inspira y nos da sentido.';

  coveredSports = [
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

  registries = [
    'Registro Provincial de Asociaciones: Nº 3.697, Sección 1ª',
    'Registro Andaluz de Entidades Deportivas: Nº 12.862',
    'Federación Española de Deportes de Montaña y Escalada: Nº 01.29.040',
    'Registro Municipal de Asociaciones (Ayto. Ronda): Nº 43'
  ];

  tarifas = [
    {
      category: 'A (Mayores)',
      price: '70,00€',
      coverage: 'ANDALUCIA, CEUTA Y MELILLA',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Montaña, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica y Carreras por Montaña.'
    },
    {
      category: 'A+ (Mayores)',
      price: '83,00€',
      coverage: 'ANDALUCIA, CEUTA Y MELILLA',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica, Carreras por Montaña. + BTT, Espeleología , Esquí Alpino y Esqui Nórdico, no competitivos.'
    },
    {
      category: 'A Familiar (Mayores)',
      price: '68,00€',
      coverage: 'ANDALUCIA, CEUTA Y MELILLA',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Montaña, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica y Carreras por Montaña.'
    },
    {
      category: 'A-IS (Inclusión Social)',
      price: '44,00€',
      coverage: 'ANDALUCIA, CEUTA Y MELILLA',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Montaña, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica, Carreras por Montaña.'
    },
    {
      category: 'A+IS (Inclusión Social)',
      price: '58,00€',
      coverage: 'ANDALUCIA, CEUTA Y MELILLA',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica, Carreras por Montaña. + BTT, Espeleología , Esquí Alpino y Esqui Nórdico, no competitivos.'
    },
    {
      category: 'A-ESP (Parados y Estudiantes Universitarios)',
      price: '53,00€',
      coverage: 'ANDALUCIA, CEUTA Y MELILLA',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Montaña, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica, Carreras por Montaña.'
    },
    {
      category: 'A-65 (Mayores 65 años)',
      price: '57,00€',
      coverage: 'ANDALUCIA, CEUTA Y MELILLA',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Montaña, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica, Carreras por Montaña.'
    },
    {
      category: 'A NAC (Mayores)',
      price: '77,00€',
      coverage: 'ESPAÑA, ANDORRA, PIRINEO FRANCES, PORTUGAL Y MARRUECOS',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica y Carreras por Montaña. Licencia autonómica con cobertura deportiva en España, Andorra, Pirineo Francés, Portugal y Marruecos. Esta licencia es válida para la participación en actividades y competiciones de ámbito autonómico, así como para acceder a los refugios de Andalucía, formaciones y actividades promovidas por la FADMES. No será válida para la participación en competiciones, actividades y formaciones de FEDME, ni para el acceso con descuento a Refugios incluidos en el convenio de reciprocidad. Para acceder a estos servicios será necesario realizar una ampliación a Licencia B.'
    },
    {
      category: 'A NAC + (Mayores)',
      price: '94,00€',
      coverage: 'ESPAÑA, ANDORRA, PIRINEO FRANCES, PORTUGAL Y MARRUECOS',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica y Carreras por Montaña. BTT, Espeleología , Esquí Alpino y Esqui Nórdico, no competitivas. Licencia autonómica con cobertura deportiva en España, Andorra, Pirineo Francés, Portugal y Marruecos. Esta licencia es válida para la participación en actividades y competiciones de ámbito autonómico, así como para acceder a los refugios de Andalucía, formaciones y actividades promovidas por la FADMES. No será válida para la participación en competiciones, actividades y formaciones de FEDME, ni para el acceso con descuento a Refugios incluidos en el convenio de reciprocidad. Para acceder a estos servicios será necesario realizar una ampliación a Licencia B.'
    },
    {
      category: 'B (Mayores)',
      price: '91,00€',
      coverage: 'ESPAÑA, ANDORRA, PIRINEO FRANCES, PORTUGAL Y MARRUECOS',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica y Carreras por Montaña.'
    },
    {
      category: 'B-65 (Mayores 65 años)',
      price: '81,00€',
      coverage: 'ESPAÑA, ANDORRA, PIRINEO FRANCES, PORTUGAL Y MARRUECOS',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica y Carreras por Montaña.'
    },
    {
      category: 'B+ (Mayores)',
      price: '108,00€',
      coverage: 'ESPAÑA, ANDORRA, PIRINEO FRANCES, PORTUGAL Y MARRUECOS',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica, Carreras por Montaña.+ BTT, Espeleología , Esquí Alpino y Esqui Nórdico, no competitivas.'
    },
    {
      category: 'B-Familiar (Mayores)',
      price: '85,00€',
      coverage: 'ESPAÑA, ANDORRA, PIRINEO FRANCES, PORTUGAL Y MARRUECOS',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica y Carreras por Montaña.'
    },
    {
      category: 'B-IS (Inclusión Social)',
      price: '73,00€',
      coverage: 'ESPAÑA, ANDORRA, PIRINEO FRANCES, PORTUGAL Y MARRUECOS',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Montaña, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica, Carreras por Montaña.'
    },
    {
      category: 'B+IS (Inclusión Social)',
      price: '95,00€',
      coverage: 'ESPAÑA, ANDORRA, PIRINEO FRANCES, PORTUGAL Y MARRUECOS',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica, Carreras por Montaña.+ BTT, Espeleología , Esquí Alpino y Esqui Nórdico, no competitivos.'
    },
    {
      category: 'C (Mayores)',
      price: '152,00€',
      coverage: 'EUROPA Y MARRUECOS',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica, Carreras por Montaña.+ BTT, Espeleología , Esquí Alpino y Esqui Nórdico, no competitivas.'
    },
    {
      category: 'C-IS (Inclusión Social)',
      price: '114,00€',
      coverage: 'EUROPA Y MARRUECOS',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica, Carreras por Montaña.+ BTT, Espeleología , Esquí Alpino y Esqui Nórdico, no competitivas.'
    },
    {
      category: 'D (Mayores)',
      price: '240,00€',
      coverage: 'TODO EL MUNDO HASTA 7.000m',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica, Carreras por Montaña.+ BTT, Espeleología , Esquí Alpino y Esqui Nórdico, no competitivas.'
    },
    {
      category: 'D2 (Mayores)',
      price: '945,00€',
      coverage: 'TODO EL MUNDO Más de 7.000m',
      activities: 'Excursiones, Senderismo, Escalada, Vias Ferratas, Alpinismo, Esquí de Travesía, Descenso de Barrancos, Acampadas Alpinísticas, Raquetas de Nieve, Marcha Nordica, Carreras por Montaña.+ BTT, Espeleología , Esquí Alpino y Esqui Nórdico, no competitivas.'
    }
  ];

  activeSection: string = 'informacion';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['section']) {
        this.activeSection = params['section'];
      }
    });
  }

  otherFees = [
    { description: 'Cuota para federados en otro club', price: '25€', note: 'Deberá adjuntar en el formulario una copia de la tarjeta federativa' }
  ];
}
