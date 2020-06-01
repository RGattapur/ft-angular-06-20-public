import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { storeProvider } from './redux/redux.store';
import { AddfilmComponent } from './addfilm/addfilm.component';
import { DrawComponent } from './draw/draw.component';

@NgModule({
  declarations: [
    AppComponent,
    AddfilmComponent,
    DrawComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [storeProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
