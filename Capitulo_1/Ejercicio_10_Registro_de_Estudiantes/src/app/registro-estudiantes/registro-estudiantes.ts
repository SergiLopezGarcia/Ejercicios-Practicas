import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registro-estudiantes',
  imports: [FormsModule],
  templateUrl: './registro-estudiantes.html',
  styleUrl: './registro-estudiantes.css',
})

export class RegistroEstudiantesComponent {

estudiantes: Estudiante[] = [];
nuevoNombre: string = "";
nuevaEdad: number = 0;
nuevoCurso: string = "";

agregarEstudiante() {
if (this.nuevoNombre && this.nuevaEdad > 0) {
this.estudiantes.push({
nombre: this.nuevoNombre,
edad: this.nuevaEdad,
curso: this.nuevoCurso
});
this.limpiarFormulario();
}
  	}

limpiarFormulario() {
this.nuevoNombre = "";
this.nuevaEdad = 0;
this.nuevoCurso = "";
}
}

interface Estudiante {
nombre: string;
edad: number;
curso: string;
}