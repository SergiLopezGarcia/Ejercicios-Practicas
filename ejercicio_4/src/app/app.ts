import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

// COMENTARIO:
// Importar ReactiveFormsModule permite usar formularios reactivos, que son más flexibles y escalables que los template-driven.

@Component({
  selector: 'app-validador-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  // COMENTARIO:
  // FormGroup permite agrupar varios campos y sus validaciones.
  // Aquí solo hay uno, pero podrías añadir más fácilmente.
  passwordForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.validadorDetallado // Validación personalizada
    ]),
  });

  // COMENTARIO:
  // Getter para acceder fácilmente al control del password desde el template.
  get password() {
    return this.passwordForm.get('password');
  }

  // COMENTARIO:
  // validadorDetallado es una función de validación personalizada.
  // Puedes crear muchas funciones así para reglas específicas.
  validadorDetallado(control: any) {
    const valor = control.value || '';
    const errores: any = {};

    if (!/\d/.test(valor)) errores.requiereNumero = true;
    if (!/[A-Z]/.test(valor)) errores.requiereMayuscula = true;
    if (!/[a-z]/.test(valor)) errores.requiereMinuscula = true;

    // COMENTARIO:
    // Si hay errores, se devuelve el objeto; si no, null (válido).
    return Object.keys(errores).length ? errores : null;
  }
}

