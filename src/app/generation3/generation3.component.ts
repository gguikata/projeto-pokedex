import { Component, OnInit } from '@angular/core';
import { PokemonService3nd } from '../shared/services/pokemon3.service';

@Component({
  selector: 'app-generation3',
  templateUrl: './generation3.component.html',
  styleUrls: ['./generation3.component.scss'],
})
export class Generation3Component implements OnInit {
  pokemonList: any = [];
  constructor(public pokemonService3nd: PokemonService3nd) {}

  ngOnInit() {
    this.pokemonService3nd.getPokemons3().subscribe((Response) => {
      Response.results.forEach((pokemon: any) => {
        this.pokemonService3nd
          .getPokemon3(pokemon.name)
          .subscribe((Response) => {
            this.pokemonList.push(Response);
          });
      });
    });
    console.log(this.pokemonList);
  }
  zeroEsquerda(str: any, size: any) {
    let stringFormatada = String(str);

    while (stringFormatada.length < (size || 3)) {
      stringFormatada = '0' + stringFormatada;
    }
    return stringFormatada;
  }
}
