import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { CreateCardComponent } from './cards/create-card/create-card.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cards',
        component: CardsListComponent
    },
    {
        path: 'createCard',
        component: CreateCardComponent
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
