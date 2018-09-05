// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';

// Routes
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { PublicPageComponent } from './auth/public-page/public-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent
  ],
  imports: [
    SuiModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
