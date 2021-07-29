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
import { TestPage } from './pages/lessons/topic/test/test.page';
import { FormsModule } from '@angular/forms';
import { StatsPage } from './pages/stats/stats.page';
import { CalenderPage } from './pages/calender/calender.page';
import { GroupsPage } from './pages/groups/groups.page';

<<<<<<< HEAD
=======
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/login/register/register.page';
import { ForgotPasswordPage } from './pages/login/forgot-password/forgot-password.page';
import { ResetPageComponent } from './pages/login/forgot-password/reset-page/reset-page.component';


>>>>>>> 13cc029399a28720d28f44f251a2dcb81d7cf67c
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
    TopicPage,
    TestPage,
    StatsPage,
    CalenderPage,
    GroupsPage,
   
    LoginPage,
         RegisterPage,
         ForgotPasswordPage,
         ResetPageComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FormsModule,
  ]
})
export class WebsiteModule { }
