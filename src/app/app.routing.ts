import { Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { PublicPageComponent } from './auth/public-page/public-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: PublicPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: '' }
];