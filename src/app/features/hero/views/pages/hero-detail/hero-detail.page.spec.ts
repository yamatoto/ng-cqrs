import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeroDetailPage } from './hero-detail.page';

describe('HeroDetailPage', () => {
  let component: HeroDetailPage;
  let fixture: ComponentFixture<HeroDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
