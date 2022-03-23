import { Component, OnInit } from '@angular/core';
import { PokemonService } from './shared/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  generations = [
    { nome: '1ª Geração' },
    { nome: '2ª Geração' },
    { nome: '3ª Geração' },
  ];
  pokemonList: any = [];

  constructor(public pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe((Response) => {
      Response.results.forEach((pokemon: any) => {
        this.pokemonService.getPokemon(pokemon.name).subscribe((Response) => {
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
