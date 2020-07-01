import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

   // //binh thuong minh dung tu khoa new
  // heroService = new HeroService();

  constructor(
    private _route: ActivatedRoute,
    private _heroService: HeroService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(){
    const id =  +this._route.snapshot.paramMap.get('id');
    console.log(id);
    this._heroService.getHero(id).subscribe(result => this.hero = result);
  }

  goBack(): void {
    this._location.back();
  }

}
