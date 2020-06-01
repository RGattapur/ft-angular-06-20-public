import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioComponent } from '../radio/radio.component';
import { TvComponent } from '../tv/tv.component';
import { Radio4Component } from '../radio/radio4/radio4.component';
import { PayWall } from '../guard/PayWall';
import { WhatsonComponent } from '../whatson/whatson.component';
import { ErrorComponent } from '../error/error.component';
import { WmotComponent } from '../radio/wmot/wmot.component';

// The ROUTER will pick the first matching route.
// The order of route objects defined here matters.
// The pathMatch property stops the empty path matching all routes.
// Channel defines a variable route.
// The ActivatedRoute Observable inside TvComponent works out the value of channel
// RADIO defines its own NESTED routes.
// radio/radio.component.html defines it own <router-outlet>
// Fallback to handle route errors

const AppRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
