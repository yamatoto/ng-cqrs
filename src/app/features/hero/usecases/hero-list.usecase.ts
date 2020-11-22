import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, mergeMap } from 'rxjs/operators';
import { AppState } from 'src/app/shared/store/app-store/app.reducer';
import { HeroRepository } from '../repositories/hero.repository';
import { HeroActions } from '../store/action-types';
import { selectAllHeros } from '../store/hero.selectors';

@Injectable({ providedIn: 'root' })
export class HeroListUsecase {

  constructor(private heroRepository: HeroRepository, private store: Store<AppState>) { }

  fetchHeroes(): void {
    this.store.pipe(
      select(selectAllHeros),
      filter(heroes => heroes === null),
      mergeMap(() => this.heroRepository.findAll())
    ).subscribe(heroes => {
      this.store.dispatch(HeroActions.setHeroes({heroes}));
    });
  }
}
