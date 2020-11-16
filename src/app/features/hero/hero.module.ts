import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
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
    RouterModule.forChild(routes)
  ],
  declarations: [HeroListPage, HeroDetailPage]
})
export class HeroModule {}
