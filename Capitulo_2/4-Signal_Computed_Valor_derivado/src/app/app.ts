import { Component, signal } from '@angular/core';
import { SignalDoubleCounter } from "./signal-double-counter/signal-double-counter";

@Component({
  selector: 'app-root',
  imports: [SignalDoubleCounter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('4-Signal_Computed_Valor_derivado');
}
