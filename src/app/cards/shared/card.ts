import { CardType } from './enums/card-type';

export interface ICard {
    _id?: string;
    type: CardType;
    name?: string;
    manaCost?: number;
    health?: number;
    attack?: number;
    description?: string;
    pictureUrl?: string;
    creator?: string;
}
