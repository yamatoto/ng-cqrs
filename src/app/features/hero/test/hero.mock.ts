import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from 'src/app/shared/models/hero.model';
import { compareHeroStrong } from '../domains/hero.domain';

export const heroes: Hero[] = [
  { id: '001', name: 'ワンパンマン', level: 'A', lank: 39},
  { id: '002', name: '鬼サイボーグ', level: 'S', lank: 14},
  { id: '003', name: 'タンクトップマスター', level: 'S', lank: 15},
  { id: '004', name: '金属バット', level: 'S', lank: 16},
  { id: '005', name: 'ぷりぷりプリズナー', level: 'S', lank: 17},
  { id: '006', name: 'スティンガー', level: 'A', lank: 10},
  { id: '007', name: '閃光のフラッシュ', level: 'S', lank: 13},
  { id: '008', name: 'アマイマスク', level: 'A', lank: 1},
  { id: '009', name: 'ブラスト', level: 'S', lank: 1},
  { id: '010', name: '戦慄のタツマキ', level: 'S', lank: 2},
  { id: '011', name: 'シルバーファング', level: 'S', lank: 3},
  { id: '012', name: 'アトミック侍', level: 'S', lank: 4},
  { id: '013', name: '童帝', level: 'S', lank: 5},
  { id: '014', name: 'メタルナイト', level: 'S', lank: 6},
  { id: '015', name: 'キング', level: 'S', lank: 7},
  { id: '016', name: 'ゾンビマン', level: 'S', lank: 8},
  { id: '017', name: '駆動騎士', level: 'S', lank: 9},
  { id: '018', name: '豚神', level: 'S', lank: 10},
  { id: '019', name: '超合金クロビカリ', level: 'S', lank: 11},
  { id: '020', name: '番犬マン', level: 'S', lank: 12 },
  { id: '021', name: 'タンクトップベジタリアン', level: 'A', lank: 9},
  { id: '022', name: 'デスガトリング', level: 'A', lank: 8},
  { id: '023', name: 'テジナーマン', level: 'A', lank: 7 },
  { id: '024', name: 'ブルーファイア', level: 'A', lank: 6 },
  { id: '025', name: '重戦車フンドシ', level: 'A', lank: 5 },
  { id: '026', name: 'ブシドリル', level: 'A', lank: 4 },
  { id: '027', name: 'オカマイタチ', level: 'A', lank: 3 },
  { id: '028', name: 'イアイアン', level: 'A', lank: 2},
];

export function findAllHeroesOrderByStrongLank(): Observable<Hero[]> {
  heroes.sort(compareHeroStrong);
  return of(heroes);
}

export function findHeroById(id: string): Observable<Hero> {
  const hero = heroes.find(h => h.id === id);
  return of(hero);
}
