import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { ContentListingPage } from './pages/content-listing/content-listing.page';
import { MainPage } from './pages/main/main.page';
import { RootPage } from './pages/root/root.page';


@NgModule({
  declarations: [
    ContentListingPage,
    MainPage,
    RootPage
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
