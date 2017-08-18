import { Component, OnInit, Input } from '@angular/core';
import { HERO } from '../hero-detail/hero'
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  heroes : HERO[];
  selectedHero: HERO;

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: HERO): void {
    this.selectedHero = hero;
  }
}
