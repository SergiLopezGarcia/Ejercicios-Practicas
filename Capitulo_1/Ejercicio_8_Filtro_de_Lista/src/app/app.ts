import { Component, signal } from '@angular/core';
import { FiltroListaComponent } from "./filtro-lista/filtro-lista";

@Component({
  selector: 'app-root',
  imports: [FiltroListaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio_8_Filtro_de_Lista');
}
