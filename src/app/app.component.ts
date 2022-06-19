import { Component, OnInit } from '@angular/core';
import { PokemonService } from './shared/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pokemonList: any = [];

  constructor(public pokemonService: PokemonService) {}

  ngOnInit() {}

  zeroEsquerda(str: any, size: any) {
    let stringFormatada = String(str);

    while (stringFormatada.length < (size || 3)) {
      stringFormatada = '0' + stringFormatada;
    }
    return stringFormatada;
  }
}
