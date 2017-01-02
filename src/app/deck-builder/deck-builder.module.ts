import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { PipesModule } from '../../app/pipes/pipes.module'

import { DeckBuilderComponent } from './deck-builder.component';
import { DeckViewComponent } from './deck-view/deck-view.component';
import { CreateDeckComponent } from './create-deck/create-deck.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    PipesModule
  ],
  declarations: [ CreateDeckComponent, DeckViewComponent, DeckBuilderComponent ]
})
export class DeckBuilderModule { }
