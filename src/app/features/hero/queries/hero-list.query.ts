import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/shared/store/app-store/app.reducer';
import { Hero } from '../../../shared/models/hero.model';
import { selectAllHeros } from '../store/hero.selectors';
import { HeroListPageModel } from '../views/view-models';

@Injectable({ providedIn: 'root' })
export class HeroListQuery {

  constructor(private store: Store<AppState>) { }

  private combinedState$: Observable<
  [Hero[], boolean]
  > = combineLatest([
    this.store.pipe(select(selectAllHeros)),
    of(true)
    // this.store.pipe(select(select))
  ]);

  state$: Observable<HeroListPageModel>= this.combinedState$.pipe(
    map((value: [Hero[], boolean]) => {
      if (value[0] === null) {
        return {
          heroes: value[0]
        };
      }

      return {
        heroes: value[0]
      };
    }));
}
