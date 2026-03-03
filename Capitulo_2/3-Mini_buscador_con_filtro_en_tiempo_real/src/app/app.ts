import { Component, signal } from '@angular/core';
import { SearchFilter } from "./search-filter/search-filter";

@Component({
  selector: 'app-root',
  imports: [SearchFilter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('3-Mini_buscador_con_filtro_en_tiempo_real');
}
