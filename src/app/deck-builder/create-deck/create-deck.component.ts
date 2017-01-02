import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { NotificationsService } from 'angular2-notifications'

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
    private _router: Router,
    private _notificationService: NotificationsService) {

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
    if (this.deck.cards.length <= 0) {
      this._notificationService.error('Deck creation', 'You can not create an empty deck!');
      return;
    }

    this._deckBuilderService.createDeck(this.deck).subscribe(
      res => {
        this._notificationService.success('Deck creation', 'Your deck was created successfuly!');
        setTimeout(() => this._router.navigate([`/decks/${res._id}`]), 2000);
      },
      err => this._notificationService.error('Deck creation', 'An error occured while creating your deck!')
    );
  }
}
