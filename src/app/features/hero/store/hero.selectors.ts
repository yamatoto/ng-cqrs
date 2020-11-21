import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHero from './hero.reducer';

const selectHeroState = createFeatureSelector<fromHero.HeroState>(fromHero.key);

export const selectAllHeros = createSelector(
  selectHeroState,
  state => state.heroes
);
