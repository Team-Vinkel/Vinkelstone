import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DeckBuilderService } from '../shared/deck-builder.service'
import { IDeck } from '../shared/deck';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.css']
})
export class CreateDeckComponent implements OnInit {

  public deck: IDeck;
  constructor(private _deckBuilderService: DeckBuilderService) {

  }

  ngOnInit() {
    this.deck = { };
  }

  createDeck() {
    this.deck.cards = JSON.parse(sessionStorage.getItem('cardsForDeck'));

    this._deckBuilderService.createDeck(this.deck)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}
