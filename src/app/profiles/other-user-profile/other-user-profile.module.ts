import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherUserProfileComponent } from './other-user-profile.component';
import { OtherUserCardsComponent } from './other-user-cards/other-user-cards.component';
import { OtherUserDecksComponent } from './other-user-decks/other-user-decks.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OtherUserProfileComponent, OtherUserCardsComponent, OtherUserDecksComponent]
})
export class OtherUserProfileModule { }
