import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CreateCardModule } from './create-card/create-card.module';
import { CardsUserComponent } from './cards-user/cards-user.component';

@NgModule({
  imports: [
    CommonModule,
    CreateCardModule
  ],
  declarations: [CardsListComponent, CardsUserComponent],
  exports: [ CreateCardModule ]
})
export class CardsModule { }
