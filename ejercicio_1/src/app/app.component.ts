import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// REACT NOTE: Importamos el componente con su nuevo nombre con sufijo component.
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent], // REACT NOTE: Aquí declaramos qué componentes "hijos" usamos en el JSX/Template.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('ejercicio_1');
}
