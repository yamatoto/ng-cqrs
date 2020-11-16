import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/shared/models/hero.model';
import { findAllHeroesOrderByStrongLank, findHeroById } from '../test/hero.mock';

@Injectable({
  providedIn: 'root'
})
export class HeroRepository {

  constructor(
  ) { }

  findAll(): Observable<Hero[]> {
    return findAllHeroesOrderByStrongLank();
  }

  findById(id: string): Observable<Hero> {
    return findHeroById(id);
  }
}
