import { Component, signal } from '@angular/core';
import { CalculadoraComponent } from "./calculadora/calculadora";

@Component({
  selector: 'app-root',
  imports: [CalculadoraComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio_9_Calculadora');
}
