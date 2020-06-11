import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  // declarations : what components does this contain?
  declarations: [
    AppComponent,
    PanelComponent
  ],
  // what other modules does it use.
  imports: [
    BrowserModule
  ],
  // does it use any services ..
  providers: [],
  // which component starts the application ......
  bootstrap: [AppComponent]
})

export class AppModule { }
