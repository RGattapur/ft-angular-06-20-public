import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SelectPipe } from './pipes/select.pipe';
import { CelsiusPipe } from './pipes/celsius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectPipe,
    CelsiusPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
