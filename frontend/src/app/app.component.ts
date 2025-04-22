import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';  // Ruta correcta
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NavbarComponent, RouterModule],  // Importamos RouterModule para las rutas
})
export class AppComponent {}
