import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';

export const infoRoutes: Routes = [
        {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
];
