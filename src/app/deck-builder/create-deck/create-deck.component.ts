import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { DeckBuilderService } from '../shared/deck-builder.service';
import { CardService } from '../../cards/shared/card.service';
import { AuthService } from '../../auth/auth.service';

import { IDeck } from '../shared/deck';

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
    private _authService: AuthService,
    private _router: Router) {

  }

  ngOnInit() {
    let cardIds: string[] = [];
    this._deckBuilderService.getCardsForDeck()
      .forEach(x => cardIds.push(x._id))

    this.deck = {
      creator: this._authService.getCurrentUsername(),
      cards: cardIds
    };
  }

  createDeck() {
    this._deckBuilderService.createDeck(this.deck).subscribe(
      res => {
        this._router.navigateByUrl(`/decks/${res._id}`);
      },
      err => console.log(err)
    );
  }
}
