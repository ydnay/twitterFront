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
import { TweetService } from './services/tweet.service';

// Components
import { AppComponent } from './app.component';
import { PublicPageComponent } from './auth/public-page/public-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MiniProfileComponent } from './mini-profile/mini-profile.component';
import { AllTweetsComponent } from './all-tweets/all-tweets.component';
import { WhoToFollowComponent } from './who-to-follow/who-to-follow.component';
import { PostTweetComponent } from './tweet/post-tweet/post-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    HomeComponent,
    NavBarComponent,
    MiniProfileComponent,
    AllTweetsComponent,
    WhoToFollowComponent,
    PostTweetComponent
  ],
  imports: [
    SuiModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [AuthService, TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
