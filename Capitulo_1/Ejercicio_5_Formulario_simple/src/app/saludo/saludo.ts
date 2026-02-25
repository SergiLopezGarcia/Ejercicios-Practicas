import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-saludo',
  imports: [FormsModule],
  templateUrl: './saludo.html',
  styleUrl: './saludo.css',
})
export class SaludoComponent {
nombre: string = "";
}