import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './modules/website/pages/login/login.page';
import { RegisterPage } from './modules/website/pages/login/register/register.page';


const routes: Routes = [
  {path: 'website', loadChildren: () => import('./modules/website/website.module').then(m=> m.WebsiteModule)},
  {path: 'website/:', loadChildren: () => import('./modules/website/website.module').then(m=> m.WebsiteModule)},
  {path: '', component:LoginPage},
  {path: 'kayitol' , component: RegisterPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
