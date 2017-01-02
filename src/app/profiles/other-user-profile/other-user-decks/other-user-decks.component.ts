import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DeckBuilderService } from './../../../deck-builder/shared/deck-builder.service';
import { IDeck } from '../../../deck-builder/shared/deck';

@Component({
  selector: 'app-other-user-decks',
  templateUrl: './other-user-decks.component.html',
  styleUrls: ['./other-user-decks.component.css']
})
export class OtherUserDecksComponent implements OnInit {
  public decks: IDeck[];
  public error: string;

  constructor(private _deckBuilderService: DeckBuilderService, private _activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    this._activatedRoute.params
      .concatMap(res => {
        let username = res['username'];
        return this._deckBuilderService.getDecksByUser(username);
      })
      .subscribe(
        res => {
          if (res._body) {
            this.error = 'No decks to show';
          } else {
            if (res.length < 1) {
              this.error = 'No decks to show';
            } else {
              this.decks = res;
              console.log(this.decks);
            }
          }
        }
      );
  }

}
