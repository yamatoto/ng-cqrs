import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/shared/store/app-store/app.reducer';
import { Hero } from '../../../shared/models/hero.model';
import { selectAllHeroes } from '../store/hero.selectors';
import { HeroListPageModel } from '../views/view-models';

@Injectable({ providedIn: 'root' })
export class HeroListQuery {

  constructor(private store: Store<AppState>) { }

  private combinedState$: Observable<[Hero[]]> = combineLatest([
    this.store.pipe(select(selectAllHeroes))
  ]);

  state$: Observable<HeroListPageModel>= this.combinedState$.pipe(
    map((value: [Hero[]]) => {
      const [heroes] = value;
      return {
        heroes
      };
    })
  );

  selectHeroes(): Observable<Hero[]> {
    return this.store.pipe(select(selectAllHeroes));
  }
}
