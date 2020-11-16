import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/shared/models/hero.model';
import { HeroRepository } from '../../../repositories/hero.repository';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.page.html',
  styleUrls: ['./hero-list.page.scss'],
})
export class HeroListPage implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroRepository: HeroRepository) { }

  ngOnInit() {
    this.heroes$ = this.heroRepository.findAll();
  }
}
