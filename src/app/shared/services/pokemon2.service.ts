import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService2nd {
  api: string = 'https://pokeapi.co/api/v2';

  constructor(public http: HttpClient) {}

  getPokemons2() {
    return this.http.get<any>(`${this.api}/pokemon?limit=99&offset=151`);
  }
  getPokemon2(namePokemon: string) {
    return this.http.get<any>(`${this.api}/pokemon/${namePokemon}`);
  }
}
