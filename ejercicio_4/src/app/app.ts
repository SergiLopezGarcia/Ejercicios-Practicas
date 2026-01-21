import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-validador-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  passwordForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.validadorDetallado 
    ]),
  });

  get password() {
    return this.passwordForm.get('password');
  }

  validadorDetallado(control: any) {
    const valor = control.value || '';
    const errores: any = {};

    if (!/\d/.test(valor)) errores.requiereNumero = true;
    if (!/[A-Z]/.test(valor)) errores.requiereMayuscula = true;
    if (!/[a-z]/.test(valor)) errores.requiereMinuscula = true;

    return Object.keys(errores).length ? errores : null;
  }
}

