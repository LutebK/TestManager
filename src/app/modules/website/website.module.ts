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
import { OptionsEducationPage } from './pages/options/options-education/options-education.page';
import { OptionsHelpPage } from './pages/options/options-help/options-help.page';
import { OptionsChangepassPage } from './pages/options/options-changepass/options-changepass.page';
import { OptionsInvitePage } from './pages/options/options-invite/options-invite.page';
import { OptionsPremiumPage } from './pages/options/options-premium/options-premium.page';
import { TopicPage } from './pages/lessons/topic/topic.page';


@NgModule({
  declarations: [
    ContentListingPage,
    MainPage,
    RootPage,
    MainMenuPage,
    ProfilePage,
    OptionsPage,
    LessonsPage,
    OptionsEducationPage,
    OptionsHelpPage,
    OptionsChangepassPage,
    OptionsInvitePage,
    OptionsPremiumPage,
    TopicPage
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
