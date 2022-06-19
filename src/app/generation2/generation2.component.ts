import { Component, OnInit } from '@angular/core';
import { PokemonService2nd } from '../shared/services/pokemon2.service';

@Component({
  selector: 'app-generation2',
  templateUrl: './generation2.component.html',
  styleUrls: ['./generation2.component.scss'],
})
export class Generation2Component implements OnInit {
  pokemonList: any = [];
  constructor(public pokemonService2nd: PokemonService2nd) {}

  ngOnInit() {
    this.pokemonService2nd.getPokemons2().subscribe((Response) => {
      Response.results.forEach((pokemon: any) => {
        this.pokemonService2nd
          .getPokemon2(pokemon.name)
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
