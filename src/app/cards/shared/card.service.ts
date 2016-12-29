import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { KinveyService } from './../../shared/kinvey/kinvey.service';

import { ICard } from './card';

const CARDS_COLLECTION_NAME = 'cards';

@Injectable()
export class CardService {
    constructor(private _kinvey: KinveyService) {
    }

    public getAllCards(): Observable<ICard[]> {
        return this._kinvey.getCollection(CARDS_COLLECTION_NAME);
    }

    public createCard(card: ICard) {
        return this._kinvey.postCollection(CARDS_COLLECTION_NAME, card);
    }
}
