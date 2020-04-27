import { InventoryService } from './inventory';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { appRoutingModule } from './app.routing';
import { InventoryComponent } from './inventory';
import { AnalyticsComponent } from './analytics';
import { AnnouncementsComponent } from './announcements';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventoryComponent,
    AnalyticsComponent,
    AnnouncementsComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [
    InventoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
