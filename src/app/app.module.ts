// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';

// Routes
import { routes } from './app.routing';

// Services
import { AuthService } from './services/auth.service';

// Components
import { AppComponent } from './app.component';
import { PublicPageComponent } from './auth/public-page/public-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LogoutComponent } from './auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent
  ],
  imports: [
    SuiModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
