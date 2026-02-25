import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  imports: [],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css',
})
export class ListaTareasComponent {
  tareas: string[] = [
    "Aprender Angular",
    "Practicar @for",
    "Crear mi primer proyecto"
  ];
}