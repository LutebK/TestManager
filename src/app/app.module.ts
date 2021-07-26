import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { RootPage } from './pages/root/root.page';

@NgModule({
  declarations: [
    
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
    RootPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootPage]
})
export class AppModule { }
