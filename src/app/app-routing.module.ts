import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { cardsRoutes } from './cards/cards-routes';
import { deckBuilderRoutes } from './deck-builder/deck-builder-routes';

import { HomeComponent } from './home/home.component';
import { DecksUserComponent } from './deck-builder/decks-user/decks-user.component';
import { CardsUserComponent } from './cards/cards-user/cards-user.component';
import { FaqComponent} from './faq/faq.component';

import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

import { UserIsLoggedGuard } from './shared/route-guard/is-logged-guard';
import { UserIsNotLoggedGuard } from './shared/route-guard/is-not-logged-guard';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    ...deckBuilderRoutes,
    ...cardsRoutes,
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
        component: DecksUserComponent,
        canActivate: [ UserIsLoggedGuard ]
    },
    {
        path: 'profile/cards',
        component: CardsUserComponent,
        canActivate: [ UserIsLoggedGuard ]
    },
    {
        path: 'faq',
        component: FaqComponent
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
