import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';
import { CreateDeckComponent } from './deck-builder/create-deck/create-deck.component'
import { CreateCardComponent } from './cards/create-card/create-card.component';
import { CreateSpellComponent } from './cards/create-card/create-spell/create-spell.component';
import { CreateHeroPowerComponent } from './cards/create-card/create-hero-power/create-hero-power.component';
import { CreateWeaponComponent } from './cards/create-card/create-weapon/create-weapon.component';
import { CreateMinionComponent } from './cards/create-card/create-minion/create-minion.component';

import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'deck',
        component: DeckBuilderComponent
    },
    {
        path: 'deck-create',
        component: CreateDeckComponent,
        children: [
            {
                path: '',
                outlet: 'cardSelectForm',
                component: CardsListComponent
            }
        ]
    },
    {
        path: 'create-card',
        component: CreateCardComponent,
        children: [
            {
                path: 'minion',
                outlet: 'cardCreatorForm',
                component: CreateMinionComponent
            },
            {
                path: 'spell',
                outlet: 'cardCreatorForm',
                component: CreateSpellComponent
            },
            {
                path: 'weapon',
                outlet: 'cardCreatorForm',
                component: CreateWeaponComponent
            },
            {
                path: 'hero-power',
                outlet: 'cardCreatorForm',
                component: CreateHeroPowerComponent
            }
        ]
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'sign-in',
        component: SignInComponent
    },
    // Default(fallback) routes
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
