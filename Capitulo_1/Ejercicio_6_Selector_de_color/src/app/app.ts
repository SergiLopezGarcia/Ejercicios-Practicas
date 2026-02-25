import { Component, signal } from '@angular/core';
import { SelectorColorComponent } from "./selector-color/selector-color";

@Component({
  selector: 'app-root',
  imports: [SelectorColorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio_6_Selector_de_color');
}
