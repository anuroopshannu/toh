import { Component, Input, OnInit} from '@angular/core';
import { HERO } from './hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {HeroService} from '../hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  constructor(private heroService: HeroService,private route: ActivatedRoute,private location: Location) {

   }

  ngOnInit() {

    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);

  }
  @Input() hero : HERO;


  goBack(): void {
  this.location.back();
}
}
