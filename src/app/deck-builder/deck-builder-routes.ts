import { Routes } from '@angular/router';
import { UserIsLoggedGuard } from './../shared/route-guard/is-logged-guard';
import { CreateDeckComponent } from './create-deck/create-deck.component';
import { DeckViewComponent } from './deck-view/deck-view.component';
import { DeckBuilderComponent } from './deck-builder.component';


export const deckBuilderRoutes: Routes = [
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
    }
];
