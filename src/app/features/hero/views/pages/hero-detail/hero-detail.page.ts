import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/shared/models/hero.model';
import { HeroRepository } from '../../../repositories/hero.repository';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
})
export class HeroDetailPage implements OnInit {
  hero$: Observable<Hero>;

  constructor(private route: ActivatedRoute, private heroRepository: HeroRepository) { }

  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.hero$ = this.heroRepository.findById(heroId);
  }

}
