import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../shared/services/pokemon.service';

@Component({
  selector: 'app-generation1',
  templateUrl: './generation1.component.html',
  styleUrls: ['./generation1.component.scss'],
})
export class Generation1Component implements OnInit {
  @Output() public emmitSearch: EventEmitter<any> = new EventEmitter();
  pokemonList: any = [];
  constructor(
    public pokemonService: PokemonService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

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
  public search(value: any) {
    this.emmitSearch.emit(value);
  }
  public getSearch(value: any) {
    console.log(value);
  }
}
