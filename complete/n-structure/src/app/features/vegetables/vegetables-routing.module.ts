import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VegetablesComponent } from './vegetables.component';

const routes: Routes = [{ path: '', component: VegetablesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VegetablesRoutingModule { }
