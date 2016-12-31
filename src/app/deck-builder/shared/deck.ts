import { DeckType } from './enums/deck-type';
import { ICard } from '../../cards/shared/card';

export interface IDeck {
    _id?: string;
    type?: DeckType;
    name?: string;
    creator?: string;
    cards?: string[];
}
