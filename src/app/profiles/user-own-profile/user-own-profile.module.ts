import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecksUserComponent } from './decks-user/decks-user.component';
import { CardsUserComponent } from './cards-user/cards-user.component';
import { UserOwnProfileComponent } from './user-own-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserOwnProfileComponent, CardsUserComponent, DecksUserComponent]
})
export class UserOwnProfileModule { }
