import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/app-store/app.reducer';
import { HeroActions } from '../store/action-types';

@Injectable({ providedIn: 'root' })
export class HeroDetailUsecase {

  constructor(private store: Store<AppState>) { }

  setViewingHeroId(heroId: string): void {
    this.store.dispatch(HeroActions.setViewingHeroId({heroId}));
  }
}
