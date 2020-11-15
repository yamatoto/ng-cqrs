import { createReducer, on } from '@ngrx/store';
import * as HeroActions from './hero.actions';
export const key = 'heroStore';

export interface HeroState {
  heroes: {id: string; name: string}[];
}

export const initialHeroState: HeroState = {
  heroes: null
};

export const heroReducer = createReducer(
  initialHeroState,

  on(HeroActions.setHeroes, (state, { heroes }) => {
    return { ...state, heroes };
  })

);
