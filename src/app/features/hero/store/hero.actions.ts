import { createAction, props } from '@ngrx/store';

export const setHeroes = createAction(
  '[Hero List Page] Set Heroes',
  props<{heroes: {id: string; name: string}[]}>()
);
