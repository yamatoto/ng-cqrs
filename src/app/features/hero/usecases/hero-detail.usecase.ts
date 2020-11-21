import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/app-store/app.reducer';
import { HeroRepository } from '../repositories/hero.repository';

@Injectable({ providedIn: 'root' })
export class HeroDetailUsecase {

  constructor(private heroRepository: HeroRepository, private store: Store<AppState>) { }

  fetchHeroById(id: string): void {
    // this.heroRepository.findAll().subscribe(heroes => {
    //   this.store.dispatch(HeroActions.setHeroes({heroes}));
    // });
  }
}
