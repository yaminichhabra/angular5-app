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

/*
 * App Routes
 */
const appRoutes: Routes = [
  //Redirect to welcome route if no route is specified
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view', component: ViewComponent },
  { path: '**', component: WelcomeComponent }
];

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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
