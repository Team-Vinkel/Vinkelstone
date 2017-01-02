import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CardService } from './../shared/card.service';
import { ICard } from '../shared/card';
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  public card: ICard;

  constructor(
    private _cardService: CardService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.card = {};
    this._activatedRoute.params
      .concatMap(params => {
        let cardId = params['id'];
        return this._cardService.getCardsByIds([ cardId ]);
      })
      .subscribe(
        res => {
          if (res.length > 0) {
            [ this.card ] = res;
            console.log(this.card);
          } else {
            // Error handling
          }
        }
      );
  }

}
