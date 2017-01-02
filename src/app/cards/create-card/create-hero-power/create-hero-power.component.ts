import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { NotificationsService } from 'angular2-notifications'

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
    private _authService: AuthService,
    private _router: Router,
    private _notificationService: NotificationsService) {
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
      res => {
        if (res._body) {
          this._notificationService.error("Card creation", "Error occured while creating your card!")
        } else {
          this._notificationService.success("Card creation", "Card successfuly created!")
          setTimeout(() => this._router.navigate([`/cards/${res._id}`]), 2000);
        }
      },
      err => this._notificationService.error("Card creation", "Error occured while creating your card!")
      );
  }

}
