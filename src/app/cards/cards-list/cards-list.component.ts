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

  constructor(private _cardService: CardService, private _deckBuilderService: DeckBuilderService) {
  }

  addCardToList(card: ICard) {
    this._deckBuilderService.addCardForDeck(card._id);
  }

  ngOnInit() {
    this._cardService
      .getAllCards()
      .subscribe(
        res => this.cards = res,
        err => console.log(err)
      );
  }
}
