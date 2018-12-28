import { Component, OnInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

import { Hero } from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    console.log("Dashboard: OnInit called.");
    this.getHeroes();
  }

  ngAfterViewChecked() {
    console.log("Dashboard: AfterViewChecked called.");
  }

  ngAfterViewInit() {
    console.log("Dashboard: AfterViewInit called.");
  }

  ngOnDestroy() {
    console.log("Dashboard: OnDestroy called.");
  }

  getHeroes() : void {
    this.heroService
        .getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
}
