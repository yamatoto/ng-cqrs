import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from 'src/app/shared/models/hero.model';
import { AppState } from 'src/app/shared/store/app-store/app.reducer';
import { selectViewingHero } from '../store/hero.selectors';
import { HeroDetailPageModel } from '../views/view-models';

@Injectable({ providedIn: 'root' })
export class HeroDetailQuery {

  constructor(private store: Store<AppState>) { }

  private combinedState$: Observable<
  [Hero]
  > = combineLatest([
    this.store.pipe(select(selectViewingHero)),
  ]);

  state$: Observable<HeroDetailPageModel>= this.combinedState$.pipe(
    map((value: [Hero]) => {
      const [hero] = value;
      return {
        hero
      };
    })
  );
}
