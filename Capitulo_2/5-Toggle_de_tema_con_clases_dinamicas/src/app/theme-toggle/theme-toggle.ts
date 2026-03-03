import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
})
export class ThemeToggle {
  // Inicializado en `false` para arrancar en modo claro.
  dark = false;

  // Método que invierte `dark` cada vez que se llama
  toggle() {
    this.dark = !this.dark;
  }
}
