import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  // //binh thuong minh dung tu khoa new
  // heroSerice = new HeroService();

  constructor(
    // tslint:disable-next-line: variable-name
    private _heroService: HeroService,
    private _messageService: MessageService
  ) {

  }

  //chay lan dau tien khi vao man hinh
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
    this._messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  //lay danh dach hero to HeroService
  getHeroes() {
    this._heroService.getHeroes().subscribe(result => this.heroes = result);
  }

}
