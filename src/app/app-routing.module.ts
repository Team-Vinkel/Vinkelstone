import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { cardsRoutes } from './cards/cards-routes';
import { deckBuilderRoutes } from './deck-builder/deck-builder-routes';
import { profilesRoutes } from './profiles/profiles-routes';

import { HomeComponent } from './home/home.component';
import { FaqComponent} from './faq/faq.component';
import { AboutComponent} from './about/about.component';

import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

import { UserIsLoggedGuard } from './shared/route-guard/is-logged-guard';
import { UserIsNotLoggedGuard } from './shared/route-guard/is-not-logged-guard';

import { SearchUserComponent } from './search-user/search-user.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    ...deckBuilderRoutes,
    ...cardsRoutes,
    ...profilesRoutes,
    {
        path: 'search/:pattern',
        canActivate: [ UserIsNotLoggedGuard ],
        component: SearchUserComponent
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
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'about',
        component: AboutComponent
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
