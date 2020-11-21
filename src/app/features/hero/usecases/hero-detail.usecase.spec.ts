import { TestBed } from '@angular/core/testing';
import { HeroDetailUsecase } from './hero-detail.usecase';

describe('HeroDetailUsecase', () => {
  let service: HeroDetailUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroDetailUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
