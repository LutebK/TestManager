import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPage } from 'src/app/pages/root/root.page';
import { LessonsPage } from './pages/lessons/lessons.page';
import { MainMenuPage } from './pages/main-menu/main-menu.page';
import { OptionsPage } from './pages/options/options.page';
import { ProfilePage } from './pages/profile/profile.page';

const routes: Routes = [
  {
    path: '', component: RootPage, children: [
      { path: 'anamenu', component: MainMenuPage },
      { path: 'profil', component: ProfilePage },
      { path: 'dersler', component: LessonsPage },
      { path: 'ayarlar', component: OptionsPage }
    ]}
    ];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
export class WebsiteRoutingModule { }
