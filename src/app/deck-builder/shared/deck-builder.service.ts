import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { KinveyService } from './../../shared/kinvey/kinvey.service';

import { IDeck, Deck } from './deck';
import { DeckType } from './enums/deck-type';

const DECK_COLLECTION_NAME = 'decks';

@Injectable()
export class DeckBuilderService {
    constructor(private _kinvey: KinveyService) {
    }

    public getAllDecks() {
        // return this._kinvey.getCollection(DECK_COLLECTION_NAME);
        let decks: Deck[] = [
            new Deck(DeckType.Druid, "Druid", "kosio"),
            new Deck(DeckType.Hunter, "Hunter", "kosio"),
            new Deck(DeckType.Mage, "Mage", "kosio"),
            new Deck(DeckType.Paladin, "Paladin", "kosio"),
            new Deck(DeckType.Priest, "Priest", "kosio"),
            new Deck(DeckType.Rogue, "Rogue", "kosio"),
            new Deck(DeckType.Shaman, "Shaman", "kosio"),
            new Deck(DeckType.Warlock, "Warlock", "kosio"),
            new Deck(DeckType.Warrior, "Warrior", "kosio")
        ];
        return decks;
    }

    public createDeck(deck: IDeck) {
        return this._kinvey.postCollection(DECK_COLLECTION_NAME, deck);
    }
}
