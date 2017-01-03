import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../auth/auth.service';
import { CardService } from '../../../cards/shared/card.service';

import { ICard } from '../../../cards/shared/card';

@Component({
  selector: 'app-cards-user',
  templateUrl: './cards-user.component.html',
  styleUrls: ['./cards-user.component.css']
})
export class CardsUserComponent implements OnInit {
  public cards: ICard[];
  public currentUser: string;

  constructor(
    private _cardService: CardService,
    private _authService: AuthService) {

   }

  ngOnInit() {
    this.cards = [];

    this.currentUser = this._authService.getCurrentUsername();
    this._listCurrentUserCards();
  }

  private _listCurrentUserCards() {
    this._cardService.getCardsByUser(this.currentUser)
      .subscribe(
        res => this.cards = res,
        err => console.log(err)
      );
  }
}
