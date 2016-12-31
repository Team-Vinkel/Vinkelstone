import { Component, OnInit } from '@angular/core';

import { DeckBuilderService } from './shared/deck-builder.service';
import { AuthService } from '../auth/auth.service';

import { IDeck } from './shared/deck';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {
  public decks: IDeck[];

  constructor(
    private _deckBuilderService: DeckBuilderService,
    private _authService: AuthService) {

  }

  public listCurrentUserDecks() {
    let currentUser = this._authService.getCurrentUsername();

    for (let i = 0; i < this.decks.length; i += 1) {
      let currentDeck = this.decks[i];

      if (currentDeck.creator !== currentUser) {
        this.decks.splice(i, 1);
      };
    };
  }

  ngOnInit() {
    this._deckBuilderService
      .getAllDecks()
      .subscribe(
        res => this.decks = res,
        err => console.log(err)
      );
  }

}
