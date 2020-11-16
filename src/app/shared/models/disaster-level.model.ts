export type DisasterLevel = '神' | '竜' | '鬼' | '虎' | '狼';

export const DisasterLevelMap: { [key in DisasterLevel]?: number } = {
  '神': 1,
  '竜': 2,
  '鬼': 3,
  '虎': 4,
  '狼': 5
};
