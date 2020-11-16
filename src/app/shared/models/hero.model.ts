import { HeroLevel } from './hero-level.model';

export interface Hero {
  id: string;
  name: string;
  level: HeroLevel;
  lank: number;
};
