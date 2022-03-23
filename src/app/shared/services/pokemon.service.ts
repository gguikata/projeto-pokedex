import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  api: string = 'https://pokeapi.co/api/v2';

  constructor(public http: HttpClient) {}

  getPokemons() {
    return this.http.get<any>(`${this.api}/pokemon?limit=151`);
  }
  getPokemon(namePokemon: string) {
    return this.http.get<any>(`${this.api}/pokemon/${namePokemon}`);
  }
}
