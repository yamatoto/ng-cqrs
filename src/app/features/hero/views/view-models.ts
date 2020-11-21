import { Hero } from 'src/app/shared/models/hero.model';

export interface HeroDetailPageModel {
  hero: Hero;
};

export interface HeroListPageModel {
  heroes: Hero[];
};
