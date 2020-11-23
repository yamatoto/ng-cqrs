import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import * as fromHero from './store/hero.reducer';
import { HeroDetailPage } from './views/pages/hero-detail/hero-detail.page';
import { HeroListPage } from './views/pages/hero-list/hero-list.page';

const routes: Routes = [
  {
    path: '',
    component: HeroListPage
  },
  {
    path: ':id',
    component: HeroDetailPage
  }
];
@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature(fromHero.featureKey, fromHero.reducer),
    RouterModule.forChild(routes)
  ],
  declarations: [HeroListPage, HeroDetailPage]
})
export class HeroModule {}
