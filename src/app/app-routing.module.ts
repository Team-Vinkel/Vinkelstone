import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { CardViewComponent } from './cards/card-view/card-view.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';
import { DeckViewComponent } from './deck-builder/deck-view/deck-view.component';
import { DecksUserComponent } from './deck-builder/decks-user/decks-user.component';
import { CreateDeckComponent } from './deck-builder/create-deck/create-deck.component';
import { CreateCardComponent } from './cards/create-card/create-card.component';
import { CreateSpellComponent } from './cards/create-card/create-spell/create-spell.component';
import { CreateHeroPowerComponent } from './cards/create-card/create-hero-power/create-hero-power.component';
import { CreateWeaponComponent } from './cards/create-card/create-weapon/create-weapon.component';
import { CreateMinionComponent } from './cards/create-card/create-minion/create-minion.component';
import { CardsUserComponent } from './cards/cards-user/cards-user.component';

import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

import { UserIsLoggedGuard } from './shared/route-guard/is-logged-guard';
import { UserIsNotLoggedGuard } from './shared/route-guard/is-not-logged-guard';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'decks',
        component: DeckBuilderComponent
    },
    {
        path: 'decks/:id',
        component: DeckViewComponent
    },
    {
        path: 'deck-create',
        component: CreateDeckComponent,
        canActivate: [ UserIsLoggedGuard ],
    },
    {
        path: 'cards',
        component: CardsListComponent
    },
    {
        path: 'cards/:id',
        component: CardViewComponent
    },
    {
        path: 'create-card',
        component: CreateCardComponent,
        canActivate: [ UserIsLoggedGuard ],
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
        canActivate: [ UserIsNotLoggedGuard ],
        component: SignUpComponent
    },
    {
        path: 'sign-in',
        canActivate: [ UserIsNotLoggedGuard ],
        component: SignInComponent
    },
    {
        path: 'profile/decks',
        component: DecksUserComponent
    },
    {
        path: 'profile/cards',
        component: CardsUserComponent
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
