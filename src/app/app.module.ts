/*
 * Angular Modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
/*
 * App Components and Services
 */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './auth.service';
import { CookieService } from './cookie.service';
import { UnauthenticatedRoutesGuard } from './unauthenticated-routes-guard.service';
import { AuthenticatedRoutesGuard } from './authenticated-routes-guard.service';
/*
 * App Routes
 */
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash :true }),
    HttpClientModule
  ],
  providers: [
    AuthService,
    CookieService,
    UnauthenticatedRoutesGuard,
    AuthenticatedRoutesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
