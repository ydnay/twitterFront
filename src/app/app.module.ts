// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

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
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    HomeComponent
  ],
  imports: [
    SuiModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
