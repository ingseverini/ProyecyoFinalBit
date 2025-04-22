import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="inicio">
      <h1>Bienvenido al Inicio</h1>
      <p>Esta es la página principal de la aplicación.</p>
    </div>
  `,
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {}
