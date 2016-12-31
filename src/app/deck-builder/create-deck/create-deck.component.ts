import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DeckBuilderService } from '../shared/deck-builder.service'
import { CardService } from '../../cards/shared/card.service'
import { IDeck } from '../shared/deck';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.css']
})
export class CreateDeckComponent implements OnInit {
  public deck: IDeck;
  constructor(private _deckBuilderService: DeckBuilderService, private _cardService: CardService) {

  }

  ngOnInit() {
    this.deck = { };
  }

  createDeck() {
    this.deck.cards = this._deckBuilderService.getCardsForDeck();

    this._deckBuilderService.createDeck(this.deck)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}
