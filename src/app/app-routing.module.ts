import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { cardsRoutes } from './cards/cards-routes';
import { deckBuilderRoutes } from './deck-builder/deck-builder-routes';
import { profilesRoutes } from './profiles/profiles-routes';
import { searchRoutes } from './search/search-routes';
import { infoRoutes } from './info/info-routes';
import { authRoutes } from './auth/auth-routes';

import { HomeComponent } from './home/home.component';

import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    ...deckBuilderRoutes,
    ...cardsRoutes,
    ...profilesRoutes,
    ...searchRoutes,
    ...authRoutes,
    ...infoRoutes,
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
