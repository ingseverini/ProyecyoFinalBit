import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.http.post('http://localhost:5000/api/auth/registro', this.registroForm.value)
        .subscribe({
          next: (res) => {
            console.log('Usuario registrado:', res);
            alert('¡Registro exitoso!');
            this.registroForm.reset();
          },
          error: (err) => {
            console.error('Error al registrar:', err);
            alert('Ocurrió un error al registrar el usuario.');
          }
        });
    } else {
      console.log('Formulario no válido');
    }
  }
}
