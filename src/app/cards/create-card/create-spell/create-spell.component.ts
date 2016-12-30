import { Component, OnInit } from '@angular/core';

import { CardService } from './../../shared/card.service';
import { CardType } from '../../shared/enums/card-type';
import { ICard } from '../../shared/card';

@Component({
  selector: 'app-create-spell',
  templateUrl: './create-spell.component.html',
  styleUrls: ['./create-spell.component.css']
})
export class CreateSpellComponent implements OnInit {

  card: ICard;
  constructor(private _cardService: CardService) {
  }

  ngOnInit() {
    this.card = { type: CardType.Spell };
  }

  createCard() {
    this._cardService.createCard(this.card)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
