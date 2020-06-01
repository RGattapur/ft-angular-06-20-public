import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ErrorComponent } from "../core/error/error.component";

const AppRoutes: Routes = [

  { path: '', children:[] },
   { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot( AppRoutes )],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
