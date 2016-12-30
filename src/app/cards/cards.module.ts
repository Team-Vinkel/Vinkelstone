import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CreateCardModule } from './create-card/create-card.module';

@NgModule({
  imports: [
    CommonModule,
    CreateCardModule
  ],
  declarations: [CardsListComponent],
  exports: [ CreateCardModule ]
})
export class CardsModule { }
