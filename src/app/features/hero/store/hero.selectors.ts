import { createFeatureSelector, createSelector } from '@ngrx/store';
import { isNullOrUndef } from 'src/app/shared/helpers/object.helper';
import * as fromHero from './hero.reducer';

const selectHeroState = createFeatureSelector<fromHero.HeroState>(fromHero.featureKey);

export const selectAllHeroes = createSelector(
  selectHeroState,
  state => isNullOrUndef(state) ? null  : state.heroes
);

export const selectViewingHero = createSelector(
  selectHeroState,
  state => state.heroes.find(hero => hero.id === state.viewingHeroId)
);
