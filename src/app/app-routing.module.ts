import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Generation1Component } from './generation1/generation1.component';
import { PokemonCardComponent } from './generation1/pokemon-card/pokemon-card.component';
import { Generation2Component } from './generation2/generation2.component';
import { Generation3Component } from './generation3/generation3.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'generation1',
    component: Generation1Component,
  },
  {
    path: 'generation2',
    component: Generation2Component,
  },
  {
    path: 'generation3',
    component: Generation3Component,
  },
  {
    path: 'pokemon-card/:id',
    component: PokemonCardComponent,
  },
  {
    path: '',
    redirectTo: '/generation1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
