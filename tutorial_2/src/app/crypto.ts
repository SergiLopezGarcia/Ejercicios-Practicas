import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Crypto {
  constructor(private http: HttpClient) {}
  getPokemon(name: string) {
    return this.http.get<any>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  }
}
