import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CardService } from '../../cards/shared/card.service';
import { DeckBuilderService } from '../shared/deck-builder.service';

import { IDeck } from '../shared/deck';
import { ICard } from '../../cards/shared/card';

@Component({
  selector: 'app-deck-view',
  templateUrl: './deck-view.component.html',
  styleUrls: ['./deck-view.component.css']
})

export class DeckViewComponent implements OnInit {
  public deck: IDeck;
  public cards: ICard[];

  constructor(private _cardService: CardService,
    private _deckBuilderService: DeckBuilderService,
    private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.deck = {};

    this._route.params.subscribe(params => {
      let deckId = params['id'];
      this._listCardsInDeck(deckId);
    });
  };

  private _listCardsInDeck(deckId: string) {
    this._deckBuilderService.getDecksByIds([deckId])
      .concatMap(decks => {
        [ this.deck ] = decks;
        return this._cardService.getCardsByIds(this.deck.cards);
      })
      .subscribe(
        res => this.cards = res,
        err => console.log(err)
      );
  }
}
