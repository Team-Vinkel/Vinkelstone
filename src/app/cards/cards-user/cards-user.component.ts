import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { CardService } from '../shared/card.service';

import { ICard } from '../shared/card';

@Component({
  selector: 'app-cards-user',
  templateUrl: './cards-user.component.html',
  styleUrls: ['./cards-user.component.css']
})
export class CardsUserComponent implements OnInit {
  public cards: ICard[];

  constructor(
    private _cardService: CardService,
    private _authService: AuthService) {

   }

  ngOnInit() {
    this._listCurrentUserCards();
  }

  private _listCurrentUserCards() {
    let currentUser = this._authService.getCurrentUsername();

    this._cardService.getCardsByUser(currentUser)
      .subscribe(
        res => this.cards = res,
        err => console.log(err)
      );
  }
}
