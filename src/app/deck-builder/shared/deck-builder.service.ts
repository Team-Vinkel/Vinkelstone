import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { KinveyService } from './../../shared/kinvey/kinvey.service';

import { IDeck } from './deck';
import { DeckType } from './enums/deck-type';

const DECK_COLLECTION_NAME = 'decks';

@Injectable()
export class DeckBuilderService {
    constructor(private _kinvey: KinveyService) {
    }

    public getAllDecks(): Observable<IDeck[]> {
        return this._kinvey.getCollection(DECK_COLLECTION_NAME);
    }

    public createDeck(deck: IDeck) {
        return this._kinvey.postCollection(DECK_COLLECTION_NAME, deck);
    }
}
