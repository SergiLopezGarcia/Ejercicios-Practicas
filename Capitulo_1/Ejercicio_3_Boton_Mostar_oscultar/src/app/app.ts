import { Component, signal } from '@angular/core';
import { ToggleComponent } from "./toggle/toggle";

@Component({
  selector: 'app-root',
  imports: [ToggleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio_3_Boton_Mostar_oscultar');
}
