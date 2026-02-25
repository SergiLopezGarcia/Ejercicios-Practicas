import { Component, signal } from '@angular/core';
import { ListaComprasComponent } from "./lista-compras/lista-compras";

@Component({
  selector: 'app-root',
  imports: [ListaComprasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio_7_Lista_de_comprars_con_objetos');
}
