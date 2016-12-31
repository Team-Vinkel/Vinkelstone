import { Component, OnInit } from '@angular/core';

import { ICard } from './../../shared/card';
import { CardType } from '../../shared/enums/card-type';

import { CardService } from './../../shared/card.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-create-minion',
  templateUrl: './create-minion.component.html',
  styleUrls: ['./create-minion.component.css']
})

export class CreateMinionComponent implements OnInit {

  public card: ICard;
  constructor(
    private _cardService: CardService,
    private _authService: AuthService) {
   }

  ngOnInit() {
    this.card = {
      type: CardType.Minion,
      creator: this._authService.getCurrentUsername()
     };
  }

  createCard() {
    this._cardService.createCard(this.card)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}
