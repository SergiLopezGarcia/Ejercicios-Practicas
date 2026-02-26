
// COMENTARIO:
// Importamos signal para manejar estado reactivo en Angular moderno (v16+).
// Esto permite que la UI se actualice automáticamente cuando cambian los datos, sin necesidad de detectChanges manual.
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

// COMENTARIO:
// Definimos una interfaz para los libros. Si el proyecto crece, podrías mover esto a un archivo separado (por ejemplo, libro.model.ts).
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
  // COMENTARIO:
  // Usamos signal para que la lista de libros sea reactiva.
  // Así, cualquier cambio en libros() se refleja automáticamente en la vista.
  libros = signal<Libro[]>([]);
  nuevoLibro = '';


  // COMENTARIO:
  // Esta función añade un libro a la lista si el input no está vacío.
  // Usamos spread operator para no mutar el array original (buenas prácticas de inmutabilidad).
  agregarLibro() {
    if (this.nuevoLibro.trim()) {
      this.libros.update((listaActual) => [
        ...listaActual,
        { titulo: this.nuevoLibro, leido: false },
      ]);
      this.nuevoLibro = '';
    }
  }


  // COMENTARIO:
  // Elimina un libro por su posición en el array.
  // Usamos filter para crear un nuevo array (no mutar el original).
  eliminarLibro(posicionAEliminar: number) {
    this.libros.update((listaActual) =>
      listaActual.filter((_, indiceActual) => indiceActual !== posicionAEliminar),
    );
  }


  // COMENTARIO:
  // Marca o desmarca un libro como leído. Creamos una copia del array para mantener la inmutabilidad.
  marcarComoLeido(posicionAEditar: number): void {
    this.libros.update((listaActual) => {
      const nuevaLista = [...listaActual];
      const libro = nuevaLista[posicionAEditar];
      libro.leido = !libro.leido;
      return nuevaLista;
    });
  }
}
