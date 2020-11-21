import { TestBed } from '@angular/core/testing';
import { HeroListUsecase } from './hero-list.usecase';

describe('HeroListUsecase', () => {
  let service: HeroListUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroListUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
