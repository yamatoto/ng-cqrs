import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/shared/store/app-store/app.reducer';
import { Hero } from '../../../shared/models/hero.model';
import { HeroDetailPageModel } from '../views/view-models';

@Injectable({ providedIn: 'root' })
export class HeroDetailQuery {

  constructor(private store: Store<AppState>) { }

  private combinedState$: Observable<
  [Hero, boolean]
  > = combineLatest([
    of({id: '', name: '', level: 'A',  lank: 1 } as Hero),
    // this.store.pipe(select(selectAllHeros)),
    of(true)
    // this.store.pipe(select(select))
  ]);

  state$: Observable<HeroDetailPageModel>= this.combinedState$.pipe(
    map((value: [Hero, boolean]) => {
      if (value[0] === null) {
        return {
          hero: value[0]
        };
      }

      return {
        hero: value[0]
      };
    }));
}
