import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { KinveyConfig } from './shared/kinvey/kinvey.config';
import { KinveyService } from './shared/kinvey/kinvey.service';

import { CardService } from './cards/shared/card.service';
import { DeckBuilderService } from './deck-builder/shared/deck-builder.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateCardComponent } from './cards/create-card/create-card.component';
import { CreateSpellComponent } from './cards/create-card/create-spell/create-spell.component';
import { CreateWeaponComponent } from './cards/create-card/create-weapon/create-weapon.component';
import { CreateMinionComponent } from './cards/create-card/create-minion/create-minion.component';
import { CreateHeroPowerComponent } from './cards/create-card/create-hero-power/create-hero-power.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';

import { AppRoutingModule } from './app-routing.module';
import { CreateDeckComponent } from './deck-builder/create-deck/create-deck.component';

import { AuthModule } from './auth/auth.module';
import { CardsModule } from './cards/cards.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DeckBuilderComponent,
        CreateDeckComponent
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
        DeckBuilderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
