import { Component, OnInit } from '@angular/core';

import { ICard } from './../../shared/card';
import { CardType } from '../../shared/enums/card-type';

import { CardService } from './../../shared/card.service';
@Component({
  selector: 'app-create-minion',
  templateUrl: './create-minion.component.html',
  styleUrls: ['./create-minion.component.css']
})
export class CreateMinionComponent implements OnInit {

  public card: ICard;
  constructor(private _cardService: CardService) {
   }

  ngOnInit() {
    this.card = { type: CardType.Minion };
  }

  createCard() {
    this._cardService.createCard(this.card)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}
