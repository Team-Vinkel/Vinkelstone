import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CreateCardModule } from './create-card/create-card.module';

import { PipesModule } from './../pipes/pipes.module';
import { DirectivesModule } from './../directives/directives.module';

import { CardViewComponent } from './card-view/card-view.component';

@NgModule({
  imports: [
    CommonModule,
    CreateCardModule,
    PipesModule,
    DirectivesModule,
    RouterModule
  ],
  declarations: [CardsListComponent, CardViewComponent],
  exports: [ CreateCardModule ]
})
export class CardsModule { }
