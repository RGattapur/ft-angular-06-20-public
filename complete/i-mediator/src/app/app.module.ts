import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { DrawComponent } from './draw/draw.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    DrawComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
