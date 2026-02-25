import { Component, signal } from '@angular/core';
import { TarjetaPersonalComponent } from "./tarjeta-personal/tarjeta-personal";

@Component({
  selector: 'app-root',
  imports: [TarjetaPersonalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio_1_Lista_Tareas');
}
