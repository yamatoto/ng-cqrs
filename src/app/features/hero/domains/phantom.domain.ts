import { DisasterLevel, DisasterLevelMap } from 'src/app/shared/models/disaster-level.model';

export function compareDisasterLevel(a: DisasterLevel, b: DisasterLevel) {
  if (DisasterLevelMap[a] > DisasterLevelMap[b]) {
    return 1;
  }

  if (DisasterLevelMap[b] > DisasterLevelMap[a]) {
    return -1;
  }

  return 0;
}
