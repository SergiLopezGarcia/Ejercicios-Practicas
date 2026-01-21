import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * REACT NOTE (Services):
 * Un "Service" en Angular es una clase donde ponemos la lógica de negocio (como p.ej llamadas a APIs).
 * 
 * ¿En qué se diferencia de un Custom Hook (`usePokemon`)?
 * - Los Hooks de React se instancian POR componente (si 3 componentes usan `usePokemon`, hay 3 estados).
 * - Los Servicios de Angular son (normalmente) SINGLETONS. Hay UNA sola instancia compartida para toda la app.
 */
@Injectable({
  providedIn: 'root', // "root" significa que esta instancia es global para toda la app.
})
export class PokemonService {

  // REACT NOTE: Inyectamos HttpClient en el constructor (Dependency Injection).
  // Es como si el framework nos pasara 'axios' o 'fetch' ya configurado.
  constructor(private http: HttpClient) { }

  getPokemon(name: string) {
    // Retorna un OBSERVABLE (lo veremos luego), no una Promise directa.
    return this.http.get<any>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  }
}
