import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";

import { FruitComponent } from './fruit.component';

const routes: Routes = [
  { path: '', component: FruitComponent,pathMatch: 'full' }
];

@NgModule({
  declarations: [FruitComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class FruitModule { }

