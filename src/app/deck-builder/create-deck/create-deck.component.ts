import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DeckBuilderService } from '../shared/deck-builder.service';
import { CardService } from '../../cards/shared/card.service';
import { AuthService } from '../../auth/auth.service';

import { IDeck } from '../shared/deck';
import { DeckType } from '../shared/enums/deck-type';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.css']
})

export class CreateDeckComponent implements OnInit {
  public deck: IDeck;

  constructor(
    private _deckBuilderService: DeckBuilderService,
    private _cardService: CardService,
    private _authService: AuthService) {

  }

  ngOnInit() {
    this.deck = {
      creator: this._authService.getCurrentUsername(),
      cards: this._deckBuilderService.getCardsForDeck(),
      type: DeckType.Druid
    };
  }

  createDeck() {
    this._deckBuilderService.createDeck(this.deck).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
}
