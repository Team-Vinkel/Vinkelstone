import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { KinveyConfig } from './shared/kinvey/kinvey.config';
import { KinveyService } from './shared/kinvey/kinvey.service';

import { CardService } from './cards/shared/card.service';
import { DeckBuilderService } from './deck-builder/shared/deck-builder.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CardsListComponent,
        DeckBuilderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        KinveyService,
        KinveyConfig,
        CardService,
        DeckBuilderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
