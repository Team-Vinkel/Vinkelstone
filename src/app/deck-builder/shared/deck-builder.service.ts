import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { KinveyService } from './../../shared/kinvey/kinvey.service';

import { ICard } from '../../cards/shared/card';
import { IDeck } from './deck';
import { DeckType } from './enums/deck-type';

const DECK_COLLECTION_NAME = 'decks';
const CARDS_FOR_DECK_STORAGE = 'cardsForDeck';

@Injectable()
export class DeckBuilderService {
    private cardsForDeck: string[];

    constructor(private _kinvey: KinveyService) {
        this.cardsForDeck = [];
    }

    public getCardsForDeck(): string[] {
        let storageCards = JSON.parse(sessionStorage.getItem(CARDS_FOR_DECK_STORAGE));
        if (storageCards === null) {
            this.cardsForDeck = [];
        }
        return this.cardsForDeck;
    }

    public addCardForDeck(cardId: string) {
        this.cardsForDeck.push(cardId);
        sessionStorage.setItem(CARDS_FOR_DECK_STORAGE, JSON.stringify(this.cardsForDeck));
    }

    public removeCardForDeck(cardId: string) {
        let index = this.cardsForDeck.indexOf(cardId);
        if (index > -1) {
            this.cardsForDeck.splice(index, 1);
        }
        sessionStorage.setItem(CARDS_FOR_DECK_STORAGE, JSON.stringify(this.cardsForDeck));
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

    public getDecksByUser(username: string) {
        let filter = {
            creator: username
        };
        return this._kinvey.getCollection(DECK_COLLECTION_NAME, JSON.stringify(filter));
    }
}
