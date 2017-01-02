import { Routes } from '@angular/router';

import { UserOwnProfileComponent } from './user-own-profile/user-own-profile.component';
import { CardsUserComponent } from './user-own-profile/cards-user/cards-user.component';
import { DecksUserComponent } from './user-own-profile/decks-user/decks-user.component';

import { OtherUserProfileComponent } from './other-user-profile/other-user-profile.component';
import { OtherUserCardsComponent } from './other-user-profile/other-user-cards/other-user-cards.component';
import { OtherUserDecksComponent } from './other-user-profile/other-user-decks/other-user-decks.component';

import { UserIsLoggedGuard } from './../shared/route-guard/is-logged-guard';

export const profilesRoutes: Routes = [
    {
        path: 'profile',
        component: UserOwnProfileComponent,
        canActivate: [UserIsLoggedGuard],
        children: [
            {
                path: 'cards',
                component: CardsUserComponent
            },
            {
                path: 'decks',
                component: DecksUserComponent
            }
        ]
    },
    {
        path: 'users/:username',
        component: OtherUserProfileComponent,
        children: [
            {
                path: 'cards',
                component: OtherUserCardsComponent
            },
            {
                path: 'decks',
                component: OtherUserDecksComponent
            }
        ]
    }
];
