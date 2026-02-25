import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-compras',
  imports: [],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.css',
})

export class ListaComprasComponent {
productos: Producto[] = [
{ nombre: "Manzanas", precio: 2.5 },
{ nombre: "Pan", precio: 1.8 },
{ nombre: "Leche", precio: 3.2 }
];
}

interface Producto {
nombre: string;
precio: number;
}