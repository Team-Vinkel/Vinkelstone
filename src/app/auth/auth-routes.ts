import { Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { UserIsNotLoggedGuard } from './../shared/route-guard/is-not-logged-guard';

export const authRoutes: Routes = [
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
];
