import { Injectable } from '@angular/core';
import { heroes } from './dataset';
import { HERO } from './hero-detail/hero'

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise <HERO[]> {
    return Promise.resolve(heroes);
  }

  getHeroesSlowly(): Promise<HERO[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 2000);
  });
}

getHero(id: number): Promise<HERO> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}
}
