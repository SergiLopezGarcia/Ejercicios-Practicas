import { Component, signal } from '@angular/core';
import { ContadorComponent } from "./contador/contador";

@Component({
  selector: 'app-root',
  imports: [ContadorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio_4_Contador_interactivo');
}
