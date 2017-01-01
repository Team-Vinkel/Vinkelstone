import { Routes } from '@angular/router';

import { CreateHeroPowerComponent } from './create-card/create-hero-power/create-hero-power.component';
import { CreateWeaponComponent } from './create-card/create-weapon/create-weapon.component';
import { CreateSpellComponent } from './create-card/create-spell/create-spell.component';
import { CreateMinionComponent } from './create-card/create-minion/create-minion.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CardsListComponent } from './cards-list/cards-list.component';

import { UserIsLoggedGuard } from './../shared/route-guard/is-logged-guard';

export const cardsRoutes: Routes = [
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
];
