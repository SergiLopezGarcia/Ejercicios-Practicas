import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Crypto } from './crypto';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('tutorial_2');
  protected pokemonNames = signal([
    'pikachu',
    'bulbasaur',
    'charmander',
    'squirtle',
    'ditto',
    'jigglypuff',
    'meowth',
    'psyduck',
    'eevee',
    'snorlax',
  ]);
  protected pokemonList = signal<any[]>([]);
  constructor(private pokeService: Crypto) {
    this.pokemonNames().forEach((name) => {
      this.pokeService.getPokemon(name).subscribe((pokemon) => {
        this.pokemonList.update((list) => [...list, pokemon]);
        console.log(
          `Pokemon: ${pokemon.name}, Height: ${pokemon.height}, Weight: ${pokemon.weight}`
        );
      });
    });
  }
}
