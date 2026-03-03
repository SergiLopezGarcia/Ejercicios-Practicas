import { Component, signal } from '@angular/core';
import { ThemeToggle } from "./theme-toggle/theme-toggle";

@Component({
  selector: 'app-root',
  imports: [ThemeToggle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('5-Toggle_de_tema_con_clases_dinamicas');
}
