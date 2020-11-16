import { HeroLevelMap } from 'src/app/shared/models/hero-level.model';
import { Hero } from 'src/app/shared/models/hero.model';

export function compareHeroStrong(h1: Hero, h2: Hero) {
  if (HeroLevelMap[h1.level] > HeroLevelMap[h2.level]) {
    return 1;
  }

  if (HeroLevelMap[h1.level] < HeroLevelMap[h2.level]) {
    return -1;
  }

  if (h1.lank > h2.lank) {
    return 1;
  }

  if (h1.lank < h2.lank) {
    return -1;
  }

  return 0;
}
