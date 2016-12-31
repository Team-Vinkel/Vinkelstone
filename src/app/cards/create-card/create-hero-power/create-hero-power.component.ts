import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CardService } from '../../shared/card.service';
import { AuthService } from '../../../auth/auth.service';

import { ICard } from '../../shared/card';
import { CardType } from '../../shared/enums/card-type';

@Component({
  selector: 'app-create-hero-power',
  templateUrl: './create-hero-power.component.html',
  styleUrls: ['./create-hero-power.component.css'],
})

export class CreateHeroPowerComponent implements OnInit {
  public card: ICard;

  constructor(
    private _cardService: CardService,
    private _authService: AuthService) {
  }

  ngOnInit() {
    this.card = {
      type: CardType.HeroPower,
      creator: this._authService.getCurrentUsername()
    };
  }

  createCard() {
    this._cardService.createCard(this.card)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}
