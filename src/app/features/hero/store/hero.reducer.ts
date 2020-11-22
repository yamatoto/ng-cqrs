import { createReducer, on } from '@ngrx/store';
import { Hero } from 'src/app/shared/models/hero.model';
import * as HeroActions from './hero.actions';

export const key = 'heroStore';

export interface HeroState {
  heroes: Hero[] | null;
  viewingHeroId: string;
}

export const initialHeroState: HeroState = {
  heroes: null,
  viewingHeroId: null
};

export const heroReducer = createReducer(
  initialHeroState,

  on(HeroActions.setHeroes, (state, { heroes }) => {
    return { ...state, heroes };
  }),

  on(HeroActions.setViewingHeroId, (state, { heroId }) => {
    return { ...state, viewingHeroId: heroId };
  })

);
