import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CreateCardModule } from './create-card/create-card.module';
import { CardsUserComponent } from './cards-user/cards-user.component';

import { PipesModule } from './../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    CreateCardModule,
    PipesModule
  ],
  declarations: [CardsListComponent, CardsUserComponent],
  exports: [ CreateCardModule ]
})
export class CardsModule { }
