import { Component, OnInit } from '@angular/core';
import { HERO } from '../hero-detail/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[HeroService]
})
export class DashboardComponent implements OnInit {

  constructor(private heroservice: HeroService) { }

  ngOnInit() {
    this.getData();
  }
  heroes : HERO[] = [];

  getData(): void{
    this.heroservice.getHeroes().then(heroes=>this.heroes=heroes.slice(1,5));
  }

  /***heroes: HERO[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }
  ***/
}
