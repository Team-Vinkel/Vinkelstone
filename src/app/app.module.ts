import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { KinveyConfig } from './shared/kinvey/kinvey.config';
import { KinveyService } from './shared/kinvey/kinvey.service';

import { CardService } from './cards/shared/card.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { CardsListComponent } from './cards/cards-list/cards-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CardsListComponent
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
        CardService],
    bootstrap: [AppComponent]
})
export class AppModule { }
