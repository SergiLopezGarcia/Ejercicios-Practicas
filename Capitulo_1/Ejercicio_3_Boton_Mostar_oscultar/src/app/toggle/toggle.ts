import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.html',
  styleUrl: './toggle.css',
})
export class ToggleComponent {
mostrar: boolean = false;
toggleMensaje() {
    this.mostrar = !this.mostrar;
  }
}

