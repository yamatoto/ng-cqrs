import { TestBed } from '@angular/core/testing';
import { HeroListQuery } from './hero-list.query';

describe('HeroListQuery', () => {
  let service: HeroListQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroListQuery);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
