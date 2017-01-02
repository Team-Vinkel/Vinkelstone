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
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { CardsModule } from './cards/cards.module';
import { DeckBuilderModule } from './deck-builder/deck-builder.module';
import { ProfilesModule } from './profiles/profiles.module';

import { PipesModule } from './pipes/pipes.module';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FaqComponent,
        AboutComponent
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
        PipesModule,
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
