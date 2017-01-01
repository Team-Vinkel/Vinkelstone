import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CardService } from './../../shared/card.service';
import { AuthService } from '../../../auth/auth.service';

import { CardType } from '../../shared/enums/card-type';
import { ICard } from '../../shared/card';

@Component({
  selector: 'app-create-spell',
  templateUrl: './create-spell.component.html',
  styleUrls: ['./create-spell.component.css']
})

export class CreateSpellComponent implements OnInit {

  card: ICard;
  constructor(
    private _cardService: CardService,
    private _authService: AuthService,
    private _router: Router) {
  }

  ngOnInit() {
    this.card = {
      type: CardType.Spell,
      creator: this._authService.getCurrentUsername()
    };
  }

  createCard() {
    this._cardService.createCard(this.card)
      .subscribe(
      res => {
        if (res._body) {
          // Error handling
        } else {
          setTimeout(() => this._router.navigate([`/cards/${res._id}`]), 1000);
        }
      },
      err => console.log(err)
      );
  }
}
