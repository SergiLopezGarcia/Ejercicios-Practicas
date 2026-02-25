import { Component } from '@angular/core';

@Component({
  selector: 'app-selector-color',
  imports: [],
  templateUrl: './selector-color.html',
  styleUrl: './selector-color.css',
})
export class SelectorColorComponent {
colorSeleccionado: string = "blue";
	cambiarColor(nuevoColor: string) {
		this.colorSeleccionado = nuevoColor;
	}
}