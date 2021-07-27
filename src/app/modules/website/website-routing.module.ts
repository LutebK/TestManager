import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPage } from 'src/app/modules/website/pages/root/root.page';
import { LessonsPage } from './pages/lessons/lessons.page';
import { MainMenuPage } from './pages/main-menu/main-menu.page';
import { MainPage } from './pages/main/main.page';
import { OptionsPage } from './pages/options/options.page';
import { ProfilePage } from './pages/profile/profile.page';

const routes: Routes = [
  {
    path: '', component: RootPage, children: [      
      { path: 'acilirmenu', component: MainMenuPage },
      { path: 'profil', component: ProfilePage },
      { path: 'dersler', component: LessonsPage },
      { path: 'ayarlar', component: OptionsPage },
      { path: '', component: MainPage }   
    ]}
    ];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
export class WebsiteRoutingModule { }
