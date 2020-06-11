import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})

export class CoreModule {

  private error:string = `Only import CoreModule once in app.module.ts`;

  constructor(@Optional() @SkipSelf() m:CoreModule ) {
    if( m ) {
      throw new Error( this.error );
    }
  }
}
