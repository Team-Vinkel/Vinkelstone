import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CreateCardModule } from './create-card/create-card.module';
import { CardsUserComponent } from './cards-user/cards-user.component';

import { PipesModule } from './../pipes/pipes.module';
import { CardViewComponent } from './card-view/card-view.component';

@NgModule({
  imports: [
    CommonModule,
    CreateCardModule,
    PipesModule,
    RouterModule
  ],
  declarations: [CardsListComponent, CardsUserComponent, CardViewComponent],
  exports: [ CreateCardModule ]
})
export class CardsModule { }
