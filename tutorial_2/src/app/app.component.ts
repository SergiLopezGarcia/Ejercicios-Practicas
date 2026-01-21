import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// REACT NOTE: Importamos el servicio renombrado
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', // REACT NOTE: styleUrl (singular) es la propiedad nueva recomendada
})
export class AppComponent implements OnInit {
  protected readonly title = signal('tutorial_2');

  // REACT NOTE: Requisitos del ejercicio: Pikachu, Entei, Dugtrio...
  protected pokemonNames = signal([
    'pikachu',
    'ditto',
    'eevee',
    'bulbasaur',
    'charmander',
    'squirtle',
    'jigglypuff',
    'meowth',
    'psyduck',
    'snorlax',
  ]);

  protected pokemonList = signal<any[]>([]);

  // REACT NOTE (Dependency Injection):
  // Pedimos "dame una instancia de PokemonService".
  // Esto es más limpio que hacer `const service = new PokemonService()` manualmente.
  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    /**
     * REACT NOTE (Effects):
     * ngOnInit es el equivalente más cercano a `useEffect(() => { ... }, [])`.
     * Es el lugar ideal para hacer llamadas iniciales a APIs.
     */
    this.pokemonNames().forEach((name) => {
      this.pokeService.getPokemon(name).subscribe((pokemon) => {
        // Obtenemos los datos y actualizamos la signal
        this.pokemonList.update((list) => [...list, pokemon]);
      });
    });
  }
}
