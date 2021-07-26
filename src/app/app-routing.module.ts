import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuPage } from './modules/website/pages/main-menu/main-menu.page';

const routes: Routes = [
  {path: 'website', loadChildren: () => import('./modules/website/website.module').then(m=> m.WebsiteModule)},
  {path: 'website/:', loadChildren: () => import('./modules/website/website.module').then(m=> m.WebsiteModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
