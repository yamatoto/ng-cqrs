import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/app-store/app.reducer';
import { HeroRepository } from '../repositories/hero.repository';
import { HeroActions } from '../store/action-types';

@Injectable({ providedIn: 'root' })
export class HeroListUsecase {

  constructor(private heroRepository: HeroRepository, private store: Store<AppState>) { }

  fetchHeroes(): void {
    this.heroRepository.findAll().subscribe(heroes => {
      this.store.dispatch(HeroActions.setHeroes({heroes}));
    });
  }
}
