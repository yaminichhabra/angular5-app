/*
 * Angular Routes
 */
import {  Routes } from '@angular/router';
/*
 * App Components and Services
 */
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UnauthenticatedRoutesGuard } from './unauthenticated-routes-guard.service';
import { AuthenticatedRoutesGuard } from './authenticated-routes-guard.service';

/*
 * App Routes
 */
export const appRoutes: Routes = [
    //Redirect to welcome route if no route is specified
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', canActivate: [UnauthenticatedRoutesGuard], component: WelcomeComponent },
    { path: 'login',  canActivate: [UnauthenticatedRoutesGuard], component: LoginComponent },
    { path: 'view', canActivate: [AuthenticatedRoutesGuard], component: ViewComponent },
    { path: '**', component: WelcomeComponent }
  ];

  