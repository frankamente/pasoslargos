import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'contacto', component: ContactoComponent }
];
