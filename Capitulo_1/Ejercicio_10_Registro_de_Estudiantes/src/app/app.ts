import { Component, signal } from '@angular/core';
import { RegistroEstudiantesComponent } from "./registro-estudiantes/registro-estudiantes";

@Component({
  selector: 'app-root',
  imports: [RegistroEstudiantesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio_10_Registro_de_Estudiantes');
}
