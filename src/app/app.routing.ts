import { Routes } from '@angular/router';

import { PublicPageComponent } from './auth/public-page/public-page.component';
// import { PhoneListComponent } from './phone-list/phone-list.component';

export const routes: Routes = [
    { path: '', component: PublicPageComponent },
    // { path: 'phone/:id', component: PhoneDetailsComponent },
    { path: '**', redirectTo: '' }
];