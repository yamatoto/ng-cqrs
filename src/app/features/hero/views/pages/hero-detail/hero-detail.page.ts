import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroDetailQuery } from '../../../queries/hero-detail.query';
import { HeroDetailUsecase } from '../../../usecases/hero-detail.usecase';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
})
export class HeroDetailPage implements OnInit {
  state$ = this.query.state$;

  constructor(private route: ActivatedRoute, private query: HeroDetailQuery, private usecase: HeroDetailUsecase) { }

  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.usecase.fetchHeroById(heroId);
  }

}
