import { DeckType } from './enums/deck-type';

export interface IDeck {
    type: DeckType;
    name: string;
    creator: string;
    pictureUrl: string;
}

export class Deck implements IDeck {
    public type: DeckType;
    public name: string;
    public creator: string;
    public pictureUrl: string;

    constructor(type: DeckType, name: string, creator: string) {
        this.type = type;
        this.name = name;
        this.creator = creator;

        this._setUpDeckImage();
    }

    // this is probably a very shitty solution to the problem
    private _setUpDeckImage() {
        if (this.type === DeckType.Druid) {
            this.pictureUrl = '../../../assets/images/deck-types/druid.png'
        }
        else if (this.type === DeckType.Hunter) {
            this.pictureUrl = '../../../assets/images/deck-types/hunter.png'
        }
        else if (this.type === DeckType.Mage) {
            this.pictureUrl = '../../../assets/images/deck-types/mage.png'
        }
        else if (this.type === DeckType.Paladin) {
            this.pictureUrl = '../../../assets/images/deck-types/paladin.png'
        }
        else if (this.type === DeckType.Priest) {
            this.pictureUrl = '../../../assets/images/deck-types/priest.png'
        }
        else if (this.type === DeckType.Rogue) {
            this.pictureUrl = '../../../assets/images/deck-types/rogue.png'
        }
        else if (this.type === DeckType.Shaman) {
            this.pictureUrl = '../../../assets/images/deck-types/shaman.png'
        }
        else if (this.type === DeckType.Warlock) {
            this.pictureUrl = '../../../assets/images/deck-types/warlock.png'
        }
        else if (this.type === DeckType.Warrior) {
            this.pictureUrl = '../../../assets/images/deck-types/warrior.png'
        }
    }
}