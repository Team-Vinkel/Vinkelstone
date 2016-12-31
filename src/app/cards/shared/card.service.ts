import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { KinveyService } from './../../shared/kinvey/kinvey.service';

import { ICard } from './card';
import { CardType } from '../shared/enums/card-type';

const CARDS_COLLECTION_NAME = 'cards';

@Injectable()
export class CardService {
    constructor(private _kinvey: KinveyService) {
    }

    public getAllCards(): Observable<ICard[]> {
        return this._kinvey.getCollection(CARDS_COLLECTION_NAME);
    }

    public createCard(card: ICard) {
        let cardToSend: any = card;
        cardToSend.type = CardType[card.type];
        return this._kinvey.postCollection(CARDS_COLLECTION_NAME, card);
    }

    public getCardsByIds(ids: string[]): Observable<ICard[]> {
        let filter = {
            _id: {
                $in: ids
            }
        };
        return this._kinvey.getCollection(CARDS_COLLECTION_NAME, JSON.stringify(filter));
    }
}
