import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipesModule } from './../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';

import { DecksUserComponent } from './decks-user/decks-user.component';
import { CardsUserComponent } from './cards-user/cards-user.component';
import { UserOwnProfileComponent } from './user-own-profile.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    DirectivesModule
  ],
  declarations: [
    UserOwnProfileComponent,
    CardsUserComponent,
    DecksUserComponent
  ]
})
export class UserOwnProfileModule { }
