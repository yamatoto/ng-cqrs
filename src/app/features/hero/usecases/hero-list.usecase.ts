import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, mergeMap } from 'rxjs/operators';
import { AppState } from 'src/app/shared/store/app-store/app.reducer';
import { HeroListQuery } from '../queries/hero-list.query';
import { HeroRepository } from '../repositories/hero.repository';
import { HeroActions } from '../store/action-types';

@Injectable({ providedIn: 'root' })
export class HeroListUsecase {

  constructor(private store: Store<AppState>, private query: HeroListQuery, private heroRepository: HeroRepository) { }

  fetchHeroes(): void {
    this.query.fetchHeroes().pipe(
      filter(heroes => heroes === null),
      mergeMap(() => this.heroRepository.findAll())
    ).subscribe(heroes => {
      this.store.dispatch(HeroActions.setHeroes({heroes}));
    });
  }
}
