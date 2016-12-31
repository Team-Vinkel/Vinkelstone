import { Component, OnInit } from '@angular/core';

import { CardService } from './../shared/card.service';

import { ICard } from './../shared/card';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  public cards: ICard[];
  private cardsForDeck: string[];

  constructor(private _cardService: CardService) {
    this.cardsForDeck = [];
  }

  addCardToList(card: ICard) {
    this.cardsForDeck.push(card._id);
    sessionStorage.setItem('cardsForDeck', JSON.stringify(this.cardsForDeck));
  }

  ngOnInit() {
    this._cardService
      .getAllCards()
      .subscribe(
        res => this.cards = res,
        err => console.log(err)
      );
    // this._cardService.getCardsByIds(['5866d7c0206c11177e5e6778', '5866b9caff63aaf43e6a1f23',
    // '58668428a056225e1aa03ffb', '5866d7c0206c11177e5e6778'])
    //   .subscribe(
    //     res => console.log(res),
    //     err => console.log(err)
    //   );
  }
}
