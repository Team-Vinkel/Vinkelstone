import { Component, OnInit } from '@angular/core';

import { DeckBuilderService } from './shared/deck-builder.service';

import { IDeck } from './shared/deck';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {
  public decks: IDeck[];

  constructor(private _deckBuilderService: DeckBuilderService) {

  }

  ngOnInit() {
    this._deckBuilderService
      .getAllDecks()
      .subscribe(
        res => this.decks = res
      );
  }

}
