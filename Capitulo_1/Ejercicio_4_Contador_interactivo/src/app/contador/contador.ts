import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class ContadorComponent {

numero: number = 0;
incrementar() {
this.numero++;
  	}

decrementar() {
this.numero--;
}

resetear() {
this.numero = 0;
}
}

