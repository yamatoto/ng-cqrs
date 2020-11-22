import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHero from './hero.reducer';

const selectHeroState = createFeatureSelector<fromHero.HeroState>(fromHero.key);

export const selectAllHeroes = createSelector(
  selectHeroState,
  state => state.heroes
);

export const selectViewingHero = createSelector(
  selectHeroState,
  state => state.heroes.find(hero => hero.id === state.viewingHeroId)
);
