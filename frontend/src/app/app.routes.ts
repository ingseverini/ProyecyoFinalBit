import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';  // Ruta correcta
import { RegistroComponent } from './registro/registro.component';  // Ruta correcta
import { PerfilComponent } from './perfil/perfil.component';  // Ruta correcta

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },  // Ruta de registro
  { path: 'perfil', component: PerfilComponent },
];
