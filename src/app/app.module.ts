import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { KinveyConfig } from './shared/kinvey/kinvey.config';
import { KinveyService } from './shared/kinvey/kinvey.service';

import { CardService } from './cards/shared/card.service';
import { DeckBuilderService } from './deck-builder/shared/deck-builder.service';
import { AuthService } from './auth/auth.service';

import { UserIsLoggedGuard } from './shared/route-guard/is-logged-guard';
import { UserIsNotLoggedGuard } from './shared/route-guard/is-not-logged-guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';

import { AppRoutingModule } from './app-routing.module';
import { CreateDeckComponent } from './deck-builder/create-deck/create-deck.component';

import { AuthModule } from './auth/auth.module';
import { CardsModule } from './cards/cards.module';
import { DeckViewComponent } from './deck-builder/deck-view/deck-view.component';
import { DecksUserComponent } from './deck-builder/decks-user/decks-user.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DeckBuilderComponent,
        CreateDeckComponent,
        DeckViewComponent,
        DecksUserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        AuthModule,
        CardsModule
    ],
    providers: [
        KinveyService,
        KinveyConfig,
        CardService,
        DeckBuilderService,
        AuthService,
        UserIsLoggedGuard,
        UserIsNotLoggedGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
