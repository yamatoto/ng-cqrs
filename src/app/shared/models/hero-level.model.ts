export type HeroLevel = 'S' | 'A' | 'B' | 'C';

export const HeroLevelMap: { [key in HeroLevel]?: number } = {
  'S': 1,
  'A': 2,
  'B': 3,
  'C': 4
};
