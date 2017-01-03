import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardService } from './../../../cards/shared/card.service';

import { ICard } from './../../../cards/shared/card';

@Component({
  selector: 'app-other-user-cards',
  templateUrl: './other-user-cards.component.html',
  styleUrls: ['./other-user-cards.component.css']
})
export class OtherUserCardsComponent implements OnInit {
  public user: string;
  public cards: ICard[];

  public error: string;
  constructor(private _cardService: CardService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cards = [];

    this._activatedRoute.params
      .concatMap(res => {
        let username = res['username'];
        this.user = username;
        return this._cardService.getCardsByUser(username);
      })
      .subscribe(
        res => {
          if (res._body) {
            this.error = 'No cards to show';
          } else {
            if (res.length < 1) {
              this.error = 'No cards to show';
            } else {
              this.cards = res;
              console.log(this.cards);
            }
          }
        }
      );

  }

}
