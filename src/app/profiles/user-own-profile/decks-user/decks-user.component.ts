import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../auth/auth.service';
import { DeckBuilderService } from '../../../deck-builder/shared/deck-builder.service';

import { IDeck } from '../../../deck-builder/shared/deck';

@Component({
  selector: 'app-decks-user',
  templateUrl: './decks-user.component.html',
  styleUrls: ['./decks-user.component.css']
})
export class DecksUserComponent implements OnInit {
  public decks: IDeck[];

  constructor(
    private _deckBuilderService: DeckBuilderService,
    private _authService: AuthService) {

  }

  ngOnInit() {
    this.decks = [];

    this._listCurrentUserDecks();
  }

  private _listCurrentUserDecks() {
    let currentUser = this._authService.getCurrentUsername();

    this._deckBuilderService.getDecksByUser(currentUser)
      .subscribe(
        res => this.decks = res
      );
  }
}
