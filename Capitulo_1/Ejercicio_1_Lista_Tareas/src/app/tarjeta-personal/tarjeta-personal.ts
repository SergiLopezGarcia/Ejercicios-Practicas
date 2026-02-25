import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-personal',
  imports: [],
  templateUrl: './tarjeta-personal.html',
  styleUrl: './tarjeta-personal.css',
})
export class TarjetaPersonalComponent {
  nombre: string = 'Sergi Lopez';
  edad: number = 25;
  profesion: string = 'Desarrollador Angular';
  
}
