import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SaludoComponent } from "./saludo/saludo";
@Component({
  selector: 'app-root',
  imports: [FormsModule, SaludoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio_5_Formulario_simple');
}
