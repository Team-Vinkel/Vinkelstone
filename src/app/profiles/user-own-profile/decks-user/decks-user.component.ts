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
  public error: string;

  constructor(
    private _deckBuilderService: DeckBuilderService,
    private _authService: AuthService) {

  }

  ngOnInit() {
    this._listCurrentUserDecks();
  }

  private _listCurrentUserDecks() {
    let currentUser = this._authService.getCurrentUsername();

    this._deckBuilderService.getDecksByUser(currentUser)
      .subscribe(
        res => {
          if (res._body) {
            this.error = 'No decks to show';
          } else {
            if (res.length < 1) {
              this.error = 'No decks to show';
            } else {
              this.decks = res;
            }
          }
        }
      );
  }
}
