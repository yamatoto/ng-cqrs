import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/shared/models/hero.model';

export const setHeroes = createAction(
  '[Hero List Page] Set Heroes',
  props<{heroes: Hero[]}>()
);

export const setViewingHeroId = createAction(
  '[Hero Detail Page] Set Viewing Hero Id',
  props<{heroId: string}>()
);
