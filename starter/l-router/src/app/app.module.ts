import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RadioComponent } from './radio/radio.component';
import { TvComponent } from './tv/tv.component';
import { Radio4Component } from './radio/radio4/radio4.component';
import { PayWall } from './guard/PayWall';
import { AppRoutingModule } from './routes/app-routing.module';
import { ErrorComponent } from './error/error.component';
import { WmotComponent } from './radio/wmot/wmot.component';
import { WhatsonComponent } from './whatson/whatson.component';

@NgModule({
  declarations: [
    AppComponent, RadioComponent, TvComponent, Radio4Component, ErrorComponent, WmotComponent, WhatsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PayWall],
  bootstrap: [AppComponent]
})
export class AppModule { }
