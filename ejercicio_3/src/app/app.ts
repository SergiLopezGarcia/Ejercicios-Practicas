import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Libro {
  titulo: string;
  leido: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class ListaLibrosComponent {
  libros = signal<Libro[]>([]);
  nuevoLibro = '';

  agregarLibro() {
    if (this.nuevoLibro.trim()) {
      this.libros.update((listaActual) => [
        ...listaActual,
        { titulo: this.nuevoLibro, leido: false },
      ]);
      this.nuevoLibro = '';
    }
  }

  eliminarLibro(posicionAEliminar: number) {
    this.libros.update((listaActual) =>
      listaActual.filter((_, indiceActual) => indiceActual !== posicionAEliminar),
    );
  }

  marcarComoLeido(posicionAEditar: number): void {
    this.libros.update((listaActual) => {
      const nuevaLista = [...listaActual];
      const libro = nuevaLista[posicionAEditar];
      libro.leido = !libro.leido;
      return nuevaLista;
    });
  }
}
