import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro-lista',
  imports: [FormsModule],
  templateUrl: './filtro-lista.html',
  styleUrl: './filtro-lista.css',
})
export class FiltroListaComponent {
frutas: string[] = [
"Manzana", "Banana", "Mango", "Melocotón", "Melón"
];
  	textoFiltro: string = "";

  	get frutasFiltradas() {
   		if (!this.textoFiltro) return this.frutas;
    		return this.frutas.filter(fruta =>
      		fruta.toLowerCase().includes(this.textoFiltro.toLowerCase()));
}
}
