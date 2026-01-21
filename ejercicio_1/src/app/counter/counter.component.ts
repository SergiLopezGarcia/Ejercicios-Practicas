import { Component, signal } from '@angular/core';

/**
 * REACT NOTE:
 * El sufijo ".component" en el nombre del fichero (`counter.component.ts`) es una convención de Angular 
 * para distinguir tipos de ficheros (componentes, servicios, directivas).
 * 
 * En React a veces tienes `Counter.jsx` (componente) y `useCounter.js` (hook logic).
 * Aquí en Angular todo va separado explicitamente pero el nombre nos ayuda a saber qué es qué.
 */
@Component({
  selector: 'app-counter',
  standalone: true, // REACT NOTE: "standalone: true" significa que este componente viaja solo, no necesita un NgModule (como en React).
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  /**
   * REACT NOTE (Signals):
   * `signal(0)` es el equivalente directo de `useState(0)`.
   * this.count() -> Lectura (como `count` en React)
   * this.count.set() / .update() -> Escritura (como `setCount` en React)
   */
  count = signal(0);

  increment() {
    /**
     * REACT NOTE:
     * En React: setCount(prev => prev + 1)
     * En Angular Signal: this.count.update(prev => prev + 1)
     */
    this.count.update((n) => n + 1);
  }

  reset() {
    this.count.set(0); // Equivalente a setCount(0)
  }
}
