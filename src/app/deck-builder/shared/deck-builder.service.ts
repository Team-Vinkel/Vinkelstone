import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { KinveyService } from './../../shared/kinvey/kinvey.service';

import { ICard } from '../../cards/shared/card';
import { IDeck } from './deck';
import { DeckType } from './enums/deck-type';

const DECK_COLLECTION_NAME = 'decks';

@Injectable()
export class DeckBuilderService {
    private cardsForDeck: string[];

    constructor(private _kinvey: KinveyService) {
        this.cardsForDeck = [];
    }

    public getCardsForDeck(): string[] {
        let cards: string[] = JSON.parse(sessionStorage.getItem('cardsForDeck'));
        return cards;
    }

    public addCardForDeck(cardId: string) {
        this.cardsForDeck.push(cardId);
        sessionStorage.setItem('cardsForDeck', JSON.stringify(this.cardsForDeck));
    }

    public getAllDecks(): Observable<IDeck[]> {
        return this._kinvey.getCollection(DECK_COLLECTION_NAME);
    }

    public createDeck(deck: IDeck) {
        return this._kinvey.postCollection(DECK_COLLECTION_NAME, deck);
    }

    public getDecksByIds(ids: string[]): Observable<IDeck[]> {
        let filter = {
            _id: {
                $in: ids
            }
        };
        return this._kinvey.getCollection(DECK_COLLECTION_NAME, JSON.stringify(filter));
    }
}
