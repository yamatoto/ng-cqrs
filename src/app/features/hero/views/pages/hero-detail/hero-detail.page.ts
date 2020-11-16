import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
})
export class HeroDetailPage implements OnInit {
  heroId: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroId = this.route.snapshot.paramMap.get('id');
  }

}
