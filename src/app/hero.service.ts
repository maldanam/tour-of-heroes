import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes() : Observable<Hero[]> {

    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched Heroes');
    return of(HEROES);
  }

  getHero(id: Number) : Observable<Hero> {

    // TODO: send the message _after_ fetching the heroes
    this.messageService.add(`HeroService: fetched Hero with id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
