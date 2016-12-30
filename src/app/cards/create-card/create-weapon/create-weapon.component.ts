import { Component, OnInit } from '@angular/core';

import { CardService } from './../../shared/card.service';
import { ICard } from '../../shared/card';
import { CardType } from '../../shared/enums/card-type';

@Component({
  selector: 'app-create-weapon',
  templateUrl: './create-weapon.component.html',
  styleUrls: ['./create-weapon.component.css']
})
export class CreateWeaponComponent implements OnInit {
  card: ICard;

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this.card = { type: CardType.Weapon };
  }

  createCard() {
    this._cardService.createCard(this.card)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}
