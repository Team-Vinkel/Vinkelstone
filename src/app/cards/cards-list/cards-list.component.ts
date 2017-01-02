import { Component, OnInit } from '@angular/core';

import { CardService } from './../shared/card.service';
import { DeckBuilderService } from '../../deck-builder/shared/deck-builder.service'

import { ICard } from './../shared/card';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  public cards: ICard[];
  public cardsForDeck: ICard[];

  constructor(private _cardService: CardService, private _deckBuilderService: DeckBuilderService) {
  }

  addCardToList(card: ICard) {
    this._deckBuilderService.addCardForDeck(card._id);
    this._refreshDeckCardList();
  }

  removeCardFromList(card: ICard) {
    this._deckBuilderService.removeCardForDeck(card._id);
    this._refreshDeckCardList();
  }

  ngOnInit() {
    this.cards = [];
    this.cardsForDeck = [];
    this._refreshDeckCardList();

    this._cardService
      .getAllCards()
      .subscribe(
      res => this.cards = res,
      err => console.log(err)
      );
  }

  private _refreshDeckCardList() {
    let cardsForDeckIds = this._deckBuilderService.getCardsForDeck();
    this._cardService.getCardsByIds(cardsForDeckIds)
      .subscribe(
        res => this.cardsForDeck = res,
        err => console.log(err)
      );
  }
}
