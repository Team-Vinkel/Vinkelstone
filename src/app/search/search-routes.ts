import { Routes } from '@angular/router';

import { UserIsLoggedGuard } from './../shared/route-guard/is-logged-guard';
import { SearchUserComponent } from './search-user/search-user.component';

export const searchRoutes: Routes = [
    {
        path: 'search/:pattern',
        canActivate: [ UserIsLoggedGuard ],
        component: SearchUserComponent
    },
];
