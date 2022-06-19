import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService3nd {
  api: string = 'https://pokeapi.co/api/v2';

  constructor(public http: HttpClient) {}

  getPokemons3() {
    return this.http.get<any>(`${this.api}/pokemon?limit=134&offset=251`);
  }
  getPokemon3(namePokemon: string) {
    return this.http.get<any>(`${this.api}/pokemon/${namePokemon}`);
  }
}
