import { Component, signal } from '@angular/core';
import { ListaTareasComponent } from "./lista-tareas/lista-tareas";

@Component({
  selector: 'app-root',
  imports: [ListaTareasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio_2_Lista_Tareas');
}
