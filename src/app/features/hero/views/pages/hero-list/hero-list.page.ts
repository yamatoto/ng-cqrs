import { Component, OnInit } from '@angular/core';
import { HeroListQuery } from '../../../queries/hero-list.query';
import { HeroListUsecase } from '../../../usecases/hero-list.usecase';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.page.html',
  styleUrls: ['./hero-list.page.scss'],
})
export class HeroListPage implements OnInit {
  heroes$ = this.query.state$;

  constructor(private query: HeroListQuery, private usecase: HeroListUsecase) { }

  ngOnInit() {
    this.usecase.fetchHeroes();
  }
}
