import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { KinveyConfig } from './shared/kinvey/kinvey.config';
import { KinveyService } from './shared/kinvey/kinvey.service';

import { CardService } from './cards/shared/card.service';
import { DeckBuilderService } from './deck-builder/shared/deck-builder.service';
import { AuthService } from './auth/auth.service';

import { UserIsLoggedGuard } from './shared/route-guard/is-logged-guard';
import { UserIsNotLoggedGuard } from './shared/route-guard/is-not-logged-guard';

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { CardsModule } from './cards/cards.module';
import { DeckBuilderModule } from './deck-builder/deck-builder.module';
import { ProfilesModule } from './profiles/profiles.module';
import { SearchModule } from './search/search.module';
import { HomeModule } from './home/home.module';
import { InfoModule } from './info/info.module';

import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        AuthModule,
        CardsModule,
        DeckBuilderModule,
        ProfilesModule,
        SearchModule,
        HomeModule,
        InfoModule,
        PipesModule,
        DirectivesModule,
        SimpleNotificationsModule
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
