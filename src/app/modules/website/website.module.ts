import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { ContentListingPage } from './pages/content-listing/content-listing.page';
import { MainPage } from './pages/main/main.page';
import { RootPage } from './pages/root/root.page';
import { MainMenuPage } from './pages/main-menu/main-menu.page';
import { ProfilePage } from './pages/profile/profile.page';
import { OptionsPage } from './pages/options/options.page';
import { LessonsPage } from './pages/lessons/lessons.page';


@NgModule({
  declarations: [
    ContentListingPage,
    MainPage,
    RootPage,
    MainMenuPage,
    ProfilePage,
    OptionsPage,
    LessonsPage
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
