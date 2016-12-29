import { DeckType } from './enums/deck-type';

export interface IDeck {
    type: DeckType;
    name: string;
    creator: string;
}
