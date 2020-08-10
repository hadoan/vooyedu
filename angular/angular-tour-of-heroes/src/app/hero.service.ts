import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private _messageService: MessageService
  ) { }

  //Tra ve 1 danh sach cac hero
  getHeroes(): Observable<Hero[]> {
    this._messageService.add('HeroService: fetched heroes');
    return of(HEROES);

  }

  getHero(id: number): Observable<Hero>{
    this._messageService.add(`HeroService: fetched hero id=${id}`);

    //new == => khong kiem tra kieu du lieu: vi du 1 == '1' => true
    //neu dung === => kiem tra du lieu 1 === '1' => false
    return of(HEROES.find(hero => hero.id === id));
  }


}
