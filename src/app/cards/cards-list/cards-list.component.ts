import { Component, OnInit } from '@angular/core';

import { CardService } from './../shared/card.service';
import { DeckBuilderService } from '../../deck-builder/shared/deck-builder.service'
import { AuthService } from '../../auth/auth.service'

import { ICard } from './../shared/card';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})

export class CardsListComponent implements OnInit {
  public cards: ICard[];
  public cardsForDeck: ICard[];
  public userLoggedIn: boolean;

  constructor(
    private _cardService: CardService,
    private _deckBuilderService: DeckBuilderService,
    private _authService: AuthService) {
  }

  addCardToList(card: ICard) {
    let maxCardsInDeck = 30;
    let maxCardsRepetitions = 2;
    if (this.cardsForDeck.length >= maxCardsInDeck) {
      console.log('can not add more than 30!');
      return;
    }

    let repeatedCard = this._countDuplicateCards(card._id);
    if (repeatedCard >= maxCardsRepetitions) {
      console.log('max repeated cards in a deck are 2');
      return;
    }

    this._deckBuilderService.addCardForDeck(card);
    this._refreshDeckCardList();
  }

  removeCardFromList(card: ICard) {
    this._deckBuilderService.removeCardForDeck(card);
    this._refreshDeckCardList();
  }

  ngOnInit() {
    this._authService.isUserLoggedIn
      .subscribe(
      res => this.userLoggedIn = res,
      err => console.log(err)
      );

    this._authService.checkUserLogIn();

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
    this.cardsForDeck = this._deckBuilderService.getCardsForDeck();
  }

  private _countDuplicateCards(cardIdToSearch: string): number {
    let count = 0;
    for (let i = 0; i < this.cardsForDeck.length; i += 1) {
      let currentCard = this.cardsForDeck[i]._id;
      if (currentCard === cardIdToSearch) {
        count += 1;
      }
    }
    return count;
  }
}
